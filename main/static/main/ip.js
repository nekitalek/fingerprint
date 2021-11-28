$(document).ready(function()
{
    $.get("https://api.ipdata.co?api-key=73a99c2f286a5ba48c0256f6d1085973d38ee315aebcf7c9197e9877", function (response) {
        $("#Result").append('<div class="IPResult">'+response.ip+'</p>');
        $("#Result").append('<div class="RegionResult">'+response.country_name+'</p>');
        $("#Result").append('<div class="CityResult">'+response.city+'</p>');
        $("#Result").append('<div class="Time_zoneResult">'+response.time_zone.name+'</p>');
        $("#Result").append('<div class="OrganisationResult">'+response.asn.domain+'</p>');
        $("#Result").append('<div class="isProxyResult">'+response.threat.is_proxy+'</p>');
        $("#Result").append('<div class="isTorNodeResult">'+response.threat.is_tor+'</p>');
        $("#Result").append('<div class="isSuspiciousResult">'+response.threat.is_threat+'</p>');
    }, "jsonp");
})
