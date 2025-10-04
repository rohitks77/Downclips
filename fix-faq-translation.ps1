# Read the content of the HTML file
$content = Get-Content -Path "index.html" -Raw -Encoding UTF8

# Add data-translate-priority attribute to FAQ sections
$faqSectionPattern = '(<h2\s+id="[^"]*faqs[^"]*"[^>]*>)'
$faqSectionReplacement = '$1<!-- translate-priority -->'

# Add attribute to FAQ section headers
$content = $content -replace $faqSectionPattern, $faqSectionReplacement

# Add data-translate-priority attribute to FAQ questions (h3 elements)
$faqQuestionPattern = '(<h3\s+id="[^"]*"[^>]*>)'
$faqQuestionReplacement = '$1<!-- translate-priority -->'

# Add attribute to FAQ questions
$content = $content -replace $faqQuestionPattern, $faqQuestionReplacement

# Add data-translate-priority attribute to FAQ answers (p elements following h3)
# Using different syntax for multiline regex
$regex = [regex]::new('(<h3\s+id="[^"]*"[^>]*>.*?</h3>\s*)(<p>)', [System.Text.RegularExpressions.RegexOptions]::Singleline)
$content = $regex.Replace($content, '$1$2<!-- translate-priority -->')

# Save the updated content back to the file with UTF-8 encoding
$utf8WithBom = New-Object System.Text.UTF8Encoding($true)
[System.IO.File]::WriteAllText("index.html", $content, $utf8WithBom)

Write-Host "Added translation priority markers to FAQ sections" 