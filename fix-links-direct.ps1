# Read the content of the HTML file
$content = Get-Content -Path "index.html" -Raw

# Find and replace all alternate language links in the header
$headerLinksPattern = '<!-- i18n -->([\s\S]*?)<!-- //i18n -->'
$headerLinksReplacement = @'
<!-- i18n -->
    <link rel="alternate" href="?lang=en" hreflang="x-default" />
    <link rel="alternate" href="?lang=en" hreflang="en" />
    <link rel="alternate" href="?lang=de" hreflang="de" />
    <link rel="alternate" href="?lang=pl" hreflang="pl" />
    <link rel="alternate" href="?lang=fr" hreflang="fr" />
    <link rel="alternate" href="?lang=es" hreflang="es" />
    <link rel="alternate" href="?lang=el" hreflang="el" />
    <link rel="alternate" href="?lang=lv" hreflang="lv" />
    <link rel="alternate" href="?lang=lt" hreflang="lt" />
    <link rel="alternate" href="?lang=nl" hreflang="nl" />
    <link rel="alternate" href="?lang=zh" hreflang="zh" />
    <link rel="alternate" href="?lang=it" hreflang="it" />
    <link rel="alternate" href="?lang=sv" hreflang="sv" />
    <link rel="alternate" href="?lang=sk" hreflang="sk" />
    <link rel="alternate" href="?lang=pt" hreflang="pt" />
    <link rel="alternate" href="?lang=sl" hreflang="sl" />
    <link rel="alternate" href="?lang=ru" hreflang="ru" />
    <link rel="alternate" href="?lang=da" hreflang="da" />
    <link rel="alternate" href="?lang=fi" hreflang="fi" />
    <link rel="alternate" href="?lang=bg" hreflang="bg" />
    <link rel="alternate" href="?lang=cs" hreflang="cs" />
    <link rel="alternate" href="?lang=et" hreflang="et" />
    <link rel="alternate" href="?lang=hu" hreflang="hu" />
    <link rel="alternate" href="?lang=ro" hreflang="ro" />
    <link rel="alternate" href="?lang=ja" hreflang="ja" />
    <link rel="alternate" href="?lang=ko" hreflang="ko" />
    <link rel="alternate" href="?lang=id" hreflang="id" />
<!-- //i18n -->
'@
$content = $content -replace $headerLinksPattern, $headerLinksReplacement

# Find and replace the language links in the footer
$footerLinksPattern = '<div class="lang-list">([\s\S]*?)</div>'
$footerLinksReplacement = @'
<div class="lang-list">
                        <a href="?lang=en" hreflang="en">English</a> ·
                        <a href="?lang=de" hreflang="de">Deutsch</a> ·
                        <a href="?lang=pl" hreflang="pl">Polski</a> ·
                        <a href="?lang=fr" hreflang="fr">Français</a> ·
                        <a href="?lang=es" hreflang="es">Español</a> ·
                        <a href="?lang=el" hreflang="el">Ελληνικά</a> ·
                        <a href="?lang=lv" hreflang="lv">Latvian</a> ·
                        <a href="?lang=lt" hreflang="lt">Lithuanian</a> ·
                        <a href="?lang=nl" hreflang="nl">Nederlands</a> ·
                        <a href="?lang=zh" hreflang="zh">繁體中文</a> ·
                        <a href="?lang=it" hreflang="it">Italiano</a> ·
                        <a href="?lang=sv" hreflang="sv">Svenska</a> ·
                        <a href="?lang=sk" hreflang="sk">Slovensky</a> ·
                        <a href="?lang=pt" hreflang="pt">Português</a> ·
                        <a href="?lang=sl" hreflang="sl">Slovenščina</a> ·
                        <a href="?lang=ru" hreflang="ru">Русский</a> ·
                        <a href="?lang=da" hreflang="da">Dansk</a> ·
                        <a href="?lang=fi" hreflang="fi">suomi</a> ·
                        <a href="?lang=bg" hreflang="bg">български</a> ·
                        <a href="?lang=cs" hreflang="cs">čeština</a> ·
                        <a href="?lang=et" hreflang="et">Eestlane</a> ·
                        <a href="?lang=hu" hreflang="hu">Magyar</a> ·
                        <a href="?lang=ro" hreflang="ro">Română</a> ·
                        <a href="?lang=ja" hreflang="ja">日本語</a> ·
                        <a href="?lang=ko" hreflang="ko">한국인</a> ·
                        <a href="?lang=id" hreflang="id">bahasa Indonesia</a> ·
                        <a href="?lang=ab" hreflang="ab">Abkhazian</a> ·
                        <a href="?lang=aa" hreflang="aa">Afar</a> ·
                        <a href="?lang=af" hreflang="af">Afrikaans</a> ·
                        <a href="?lang=sq" hreflang="sq">Albanian</a> ·
                        <a href="?lang=ar" hreflang="ar">العربية</a> ·
                        <a href="?lang=hy" hreflang="hy">Հայերեն</a> ·
                        <a href="?lang=az" hreflang="az">Azərbaycan</a> ·
                        <a href="?lang=bs" hreflang="bs">Bosanski</a> ·
                        <a href="?lang=tl" hreflang="tl">Tagalog</a> ·
                        <a href="?lang=hi" hreflang="hi">हिन्दी</a> ·
                        <a href="?lang=ka" hreflang="ka">ქართული</a> ·
                        <a href="?lang=hr" hreflang="hr">Hrvatski</a> ·
                        <a href="?lang=sr" hreflang="sr">Српски</a> ·
                        <a href="?lang=th" hreflang="th">ไทย</a> ·
                        <a href="?lang=vi" hreflang="vi">Tiếng Việt</a> ·
                    </div>
'@
$content = $content -replace $footerLinksPattern, $footerLinksReplacement

# Update the canonical URL
$canonicalPattern = '<link rel="canonical" href="/[a-z]{2}/">'
$canonicalReplacement = '<link rel="canonical" href="/">'
$content = $content -replace $canonicalPattern, $canonicalReplacement

# Save the updated content back to the file with UTF-8 encoding
Set-Content -Path "index.html" -Value $content -Encoding UTF8

Write-Host "Links updated successfully" 