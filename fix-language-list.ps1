# Read the content of the HTML file
$content = Get-Content -Path "index.html" -Raw -Encoding UTF8

# Add charset meta tag if it doesn't exist
if (-not ($content -match '<meta\s+charset="UTF-8"')) {
    $content = $content -replace '<head>', '<head>`n    <meta charset="UTF-8">`n    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">'
}

# Define the language list section pattern
$languageListPattern = '<div class="lang-list">([\s\S]*?)</div>'

# Create a replacement with proper HTML entities for dots
$languageListReplacement = @'
<div class="lang-list">
                        <a href="?lang=en" hreflang="en">English</a> &middot;
                        <a href="?lang=ne" hreflang="ne">नेपाली</a> &middot;
                        <a href="?lang=de" hreflang="de">Deutsch</a> &middot;
                        <a href="?lang=pl" hreflang="pl">Polski</a> &middot;
                        <a href="?lang=fr" hreflang="fr">Français</a> &middot;
                        <a href="?lang=es" hreflang="es">Español</a> &middot;
                        <a href="?lang=el" hreflang="el">Ελληνικά</a> &middot;
                        <a href="?lang=lv" hreflang="lv">Latviešu</a> &middot;
                        <a href="?lang=lt" hreflang="lt">Lietuvių</a> &middot;
                        <a href="?lang=nl" hreflang="nl">Nederlands</a> &middot;
                        <a href="?lang=zh" hreflang="zh">繁體中文</a> &middot;
                        <a href="?lang=it" hreflang="it">Italiano</a> &middot;
                        <a href="?lang=sv" hreflang="sv">Svenska</a> &middot;
                        <a href="?lang=sk" hreflang="sk">Slovensky</a> &middot;
                        <a href="?lang=pt" hreflang="pt">Português</a> &middot;
                        <a href="?lang=sl" hreflang="sl">Slovenščina</a> &middot;
                        <a href="?lang=ru" hreflang="ru">Русский</a> &middot;
                        <a href="?lang=da" hreflang="da">Dansk</a> &middot;
                        <a href="?lang=fi" hreflang="fi">Suomi</a> &middot;
                        <a href="?lang=bg" hreflang="bg">Български</a> &middot;
                        <a href="?lang=cs" hreflang="cs">Čeština</a> &middot;
                        <a href="?lang=et" hreflang="et">Eesti</a> &middot;
                        <a href="?lang=hu" hreflang="hu">Magyar</a> &middot;
                        <a href="?lang=ro" hreflang="ro">Română</a> &middot;
                        <a href="?lang=ja" hreflang="ja">日本語</a> &middot;
                        <a href="?lang=ko" hreflang="ko">한국어</a> &middot;
                        <a href="?lang=id" hreflang="id">Bahasa Indonesia</a> &middot;
                        <a href="?lang=ab" hreflang="ab">Аҧсуа</a> &middot;
                        <a href="?lang=aa" hreflang="aa">Afar</a> &middot;
                        <a href="?lang=af" hreflang="af">Afrikaans</a> &middot;
                        <a href="?lang=sq" hreflang="sq">Shqip</a> &middot;
                        <a href="?lang=ar" hreflang="ar">العربية</a> &middot;
                        <a href="?lang=hy" hreflang="hy">Հայերեն</a> &middot;
                        <a href="?lang=az" hreflang="az">Azərbaycan</a> &middot;
                        <a href="?lang=bs" hreflang="bs">Bosanski</a> &middot;
                        <a href="?lang=tl" hreflang="tl">Tagalog</a> &middot;
                        <a href="?lang=hi" hreflang="hi">हिन्दी</a> &middot;
                        <a href="?lang=ka" hreflang="ka">ქართული</a> &middot;
                        <a href="?lang=hr" hreflang="hr">Hrvatski</a> &middot;
                        <a href="?lang=sr" hreflang="sr">Српски</a> &middot;
                        <a href="?lang=th" hreflang="th">ไทย</a> &middot;
                        <a href="?lang=vi" hreflang="vi">Tiếng Việt</a>
                    </div>
'@

# Replace the language list
$content = $content -replace $languageListPattern, $languageListReplacement

# Fix copyright symbol
$content = $content -replace 'Copyright 2025', 'Copyright © 2025'

# Save the updated content back to the file with UTF-8 encoding (with BOM)
$utf8WithBom = New-Object System.Text.UTF8Encoding($true)
[System.IO.File]::WriteAllText("index.html", $content, $utf8WithBom)

Write-Host "Language list updated successfully with proper characters and HTML entities. Nepali language was added after English." 