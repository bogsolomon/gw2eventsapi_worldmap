;var map;

function unproject(coord) {
    return map.unproject(coord, map.getMaxZoom());
}

$(document).ready(function () {
    "use strict";
    
    var southWest, northEast;
    
    map = L.map("map", {
        minZoom: 0,
        maxZoom: 7,
        crs: L.CRS.Simple
    }).setView([0, 0], 0);
    
    southWest = unproject([0, 32768]);
    northEast = unproject([32768, 0]);
    
    map.setMaxBounds(new L.LatLngBounds(southWest, northEast));

    L.tileLayer("https://tiles.guildwars2.com/1/1/{z}/{x}/{y}.jpg", {
        minZoom: 0,
        maxZoom: 7,
        continuousWorld: true
    }).addTo(map); 
                 
 L.marker(unproject([8098.4585,18765.709]), {title: "Burglar"}).addTo(map)
L.marker(unproject([22597.459,11807.875]), {title: "Burglar"}).addTo(map)
L.marker(unproject([14984.792,13369.958]), {title: "Burglar"}).addTo(map)
L.marker(unproject([21082.0,11456.0]), {title: "Burglar"}).addTo(map)
L.marker(unproject([20602.625,23407.209]), {title: "Burglar"}).addTo(map)
L.marker(unproject([20510.791,12968.917]), {title: "Burglar"}).addTo(map)
L.marker(unproject([23804.959,11583.167]), {title: "Burglar"}).addTo(map)
L.marker(unproject([8617.083,18043.791]), {title: "Burglar"}).addTo(map)
L.marker(unproject([29090.084,14257.833]), {title: "Burglar"}).addTo(map)
L.marker(unproject([17977.875,22158.209]), {title: "Burglar"}).addTo(map)
L.marker(unproject([23385.709,12658.042]), {title: "Burglar"}).addTo(map)
L.marker(unproject([12882.583,13064.25]), {title: "Burglar"}).addTo(map)
L.marker(unproject([17277.459,13150.333]), {title: "Burglar"}).addTo(map)
L.marker(unproject([16966.125,17298.334]), {title: "Burglar"}).addTo(map)
L.marker(unproject([11296.833,13126.375]), {title: "Burglar"}).addTo(map)
L.marker(unproject([9119.166,16942.0]), {title: "Burglar"}).addTo(map)
L.marker(unproject([17924.334,17369.875]), {title: "Burglar"}).addTo(map)
L.marker(unproject([18859.041,14092.25]), {title: "Burglar"}).addTo(map)
L.marker(unproject([24662.584,9588.25]), {title: "Burglar"}).addTo(map)
L.marker(unproject([11133.083,14525.875]), {title: "Burglar"}).addTo(map)
L.marker(unproject([9149.708,19674.334]), {title: "Burglar"}).addTo(map)
L.marker(unproject([18789.209,15197.542]), {title: "Burglar"}).addTo(map)
L.marker(unproject([8811.0,18448.875]), {title: "Burglar"}).addTo(map)
L.marker(unproject([19713.291,12295.542]), {title: "Burglar"}).addTo(map)
L.marker(unproject([11046.208,13641.125]), {title: "Burglar"}).addTo(map)
L.marker(unproject([23290.709,9376.917]), {title: "Burglar"}).addTo(map)
L.marker(unproject([17013.416,16546.875]), {title: "Burglar"}).addTo(map)
L.marker(unproject([25192.75,8622.917]), {title: "Burglar"}).addTo(map)
L.marker(unproject([19544.709,21653.959]), {title: "Burglar"}).addTo(map)
L.marker(unproject([16691.666,13484.042]), {title: "Burglar"}).addTo(map)
L.marker(unproject([21485.5,11095.5]), {title: "Burglar"}).addTo(map)
L.marker(unproject([8400.625,17275.416]), {title: "Burglar"}).addTo(map)
L.marker(unproject([26059.166,15200.292]), {title: "Burglar"}).addTo(map)
L.marker(unproject([18362.084,11967.125]), {title: "Burglar"}).addTo(map)
L.marker(unproject([27874.959,15285.167]), {title: "Burglar"}).addTo(map)
L.marker(unproject([13406.75,15226.208]), {title: "Burglar"}).addTo(map)
L.marker(unproject([26108.541,13355.667]), {title: "Burglar"}).addTo(map)
L.marker(unproject([29437.959,17358.084]), {title: "Burglar"}).addTo(map)
L.marker(unproject([21958.959,13899.458]), {title: "Burglar"}).addTo(map)
L.marker(unproject([30554.041,16362.458]), {title: "Burglar"}).addTo(map)
L.marker(unproject([21415.334,12355.875]), {title: "Burglar"}).addTo(map)
L.marker(unproject([25632.916,10316.417]), {title: "Burglar"}).addTo(map)
L.marker(unproject([17272.0,18152.084]), {title: "Burglar"}).addTo(map)
L.marker(unproject([11413.208,13350.875]), {title: "Burglar"}).addTo(map)
L.marker(unproject([18546.834,16167.458]), {title: "Burglar"}).addTo(map)
L.marker(unproject([25178.334,9546.458]), {title: "Burglar"}).addTo(map)
L.marker(unproject([24784.875,11036.709]), {title: "Burglar"}).addTo(map)
L.marker(unproject([14639.417,12516.75]), {title: "Burglar"}).addTo(map)
L.marker(unproject([10068.958,13136.625]), {title: "Burglar"}).addTo(map)
L.marker(unproject([9509.0,18661.791]), {title: "Burglar"}).addTo(map)
L.marker(unproject([25595.125,11566.167]), {title: "Burglar"}).addTo(map)
L.marker(unproject([10132.167,17117.916]), {title: "Burglar"}).addTo(map)
L.marker(unproject([16170.792,15834.208]), {title: "Burglar"}).addTo(map)
L.marker(unproject([6561.1665,16306.125]), {title: "Burglar"}).addTo(map)
L.marker(unproject([12563.042,14731.25]), {title: "Burglar"}).addTo(map)
L.marker(unproject([23405.166,13810.583]), {title: "Burglar"}).addTo(map)
L.marker(unproject([20907.584,10409.083]), {title: "Burglar"}).addTo(map)
L.marker(unproject([20166.041,21667.0]), {title: "Burglar"}).addTo(map)
L.marker(unproject([9635.292,17788.791]), {title: "Burglar"}).addTo(map)
L.marker(unproject([6312.625,15070.0]), {title: "Burglar"}).addTo(map)
L.marker(unproject([30290.0,17570.834]), {title: "Burglar"}).addTo(map)
L.marker(unproject([26814.416,14021.917]), {title: "Burglar"}).addTo(map)
L.marker(unproject([9767.917,16468.209]), {title: "Burglar"}).addTo(map)
L.marker(unproject([13962.208,13796.417]), {title: "Burglar"}).addTo(map)
L.marker(unproject([18181.459,23241.959]), {title: "Burglar"}).addTo(map)
L.marker(unproject([31109.291,19216.084]), {title: "Burglar"}).addTo(map)
L.marker(unproject([23597.709,10664.875]), {title: "Burglar"}).addTo(map)
L.marker(unproject([6643.1665,16825.041]), {title: "Burglar"}).addTo(map)
L.marker(unproject([27893.416,13654.125]), {title: "Burglar"}).addTo(map)
L.marker(unproject([21982.209,13099.75]), {title: "Burglar"}).addTo(map)
L.marker(unproject([30995.291,16609.791]), {title: "Burglar"}).addTo(map)
L.marker(unproject([18063.709,14190.833]), {title: "Burglar"}).addTo(map)
L.marker(unproject([17144.791,17796.625]), {title: "Burglar"}).addTo(map)
L.marker(unproject([22462.459,9966.417]), {title: "Burglar"}).addTo(map)
L.marker(unproject([9570.958,15076.583]), {title: "Burglar"}).addTo(map)
L.marker(unproject([23994.0,13022.0]), {title: "Burglar"}).addTo(map)
L.marker(unproject([10328.625,15824.042]), {title: "Burglar"}).addTo(map)
L.marker(unproject([8102.0835,15065.667]), {title: "Burglar"}).addTo(map)
L.marker(unproject([10682.833,18606.709]), {title: "Burglar"}).addTo(map)
L.marker(unproject([26837.625,11760.667]), {title: "Burglar"}).addTo(map)
});