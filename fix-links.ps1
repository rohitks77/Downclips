$htmlContent = Get-Content -Path "index.html" -Raw

# Clean up any existing mal-formatted URLs
$htmlContent = $htmlContent -replace '/?lang=/([a-z]{2})/', '?lang=$1'
$htmlContent = $htmlContent -replace '/?/?lang=([a-z]{2})', '?lang=$1'

# Update the alternate links in the head section
$htmlContent = $htmlContent -replace '(<link rel="alternate" href=")(/[a-z]{2}/)"', '$1?lang=$2"'
$htmlContent = $htmlContent -replace '/([a-z]{2})/', '$1'

# Update the language links in the footer
$htmlContent = $htmlContent -replace '(<a href=")(/[a-z]{2}/)"', '$1?lang=$2"'

# Make sure we're using the correct format ?lang=XX without any slashes
$htmlContent = $htmlContent -replace '\?lang=(/)?([a-z]{2})(/)?', '?lang=$2'

# Save the updated content back to the file
$htmlContent | Set-Content -Path "index.html" -Encoding UTF8

Write-Host "Links updated successfully"
