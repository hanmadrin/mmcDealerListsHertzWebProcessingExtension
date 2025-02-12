await fetch("https://buyusedinventory.com/mvc.php/Ui/Ui/print?format=csv&service_id=inventory&includeHeaders=true", {
    "credentials": "include",
    "headers": {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:124.0) Gecko/20100101 Firefox/124.0",
        "Accept": "application/json",
        "Accept-Language": "en-US,en;q=0.5",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
        "Content-Type": "multipart/form-data; boundary=---------------------------2391145832071074782729605047",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-origin",
        "Pragma": "no-cache",
        "Cache-Control": "no-cache"
    },
    "referrer": "https://buyusedinventory.com/buyer/buy?search=%7B%22sales_format%22%3A%22+%22%2C%22zip_code%22%3A%2216917%22%2C%22distance%22%3A%221100%22%2C%22make_name%22%3A%22buick%2Cchevrolet%2Cchrysler%2Cdodge%2Cford%2Cgmc%2Chonda%2Chyundai%2Cjee%2Cjeep%2Ckia%2Clincoln%2Cmazda%2Cmitsubishi%2Cnissan%2Cram%2Csubaru%2Ctoyota%2Cvolksw%2Cvolkswagen%2Cvolkswagon%22%2C%22filterSavedFromPath%22%3A%22%2Fbuy%22%7D",
    "body": "-----------------------------2391145832071074782729605047\r\nContent-Disposition: form-data; name=\"sales_format\"\r\n\r\n \r\n-----------------------------2391145832071074782729605047\r\nContent-Disposition: form-data; name=\"zip_code\"\r\n\r\n16917\r\n-----------------------------2391145832071074782729605047\r\nContent-Disposition: form-data; name=\"distance\"\r\n\r\n1100\r\n-----------------------------2391145832071074782729605047\r\nContent-Disposition: form-data; name=\"make_name\"\r\n\r\nBUICK,CHEVROLET,CHRYSLER,DODGE,FORD,GMC,HONDA,HYUNDAI,,JEEP,KIA,LINCOLN,MAZDA,MITSUBISHI,NISSAN,RAM,SUBARU,TOYOTA,VOLKSW,VOLKSWAGEN,VOLKSWAGON\r\n-----------------------------2391145832071074782729605047\r\nContent-Disposition: form-data; name=\"filterSavedFromPath\"\r\n\r\n/buy\r\n-----------------------------2391145832071074782729605047--\r\n",
    "method": "POST",
    "mode": "cors"
});