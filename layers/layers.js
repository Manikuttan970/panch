var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Melila_Shp_1 = new ol.format.GeoJSON();
var features_Melila_Shp_1 = format_Melila_Shp_1.readFeatures(json_Melila_Shp_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Melila_Shp_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Melila_Shp_1.addFeatures(features_Melila_Shp_1);
var lyr_Melila_Shp_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Melila_Shp_1, 
                style: style_Melila_Shp_1,
                popuplayertitle: 'Melila_Shp',
                interactive: false,
                title: '<img src="styles/legend/Melila_Shp_1.png" /> Melila_Shp'
            });
var format_Clipped_Drainage_2 = new ol.format.GeoJSON();
var features_Clipped_Drainage_2 = format_Clipped_Drainage_2.readFeatures(json_Clipped_Drainage_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Clipped_Drainage_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Clipped_Drainage_2.addFeatures(features_Clipped_Drainage_2);
var lyr_Clipped_Drainage_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Clipped_Drainage_2, 
                style: style_Clipped_Drainage_2,
                popuplayertitle: 'Clipped_Drainage',
                interactive: false,
                title: '<img src="styles/legend/Clipped_Drainage_2.png" /> Clipped_Drainage'
            });
var format_Clipped_geomorp_3 = new ol.format.GeoJSON();
var features_Clipped_geomorp_3 = format_Clipped_geomorp_3.readFeatures(json_Clipped_geomorp_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Clipped_geomorp_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Clipped_geomorp_3.addFeatures(features_Clipped_geomorp_3);
var lyr_Clipped_geomorp_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Clipped_geomorp_3, 
                style: style_Clipped_geomorp_3,
                popuplayertitle: 'Clipped_geomorp',
                interactive: false,
                title: '<img src="styles/legend/Clipped_geomorp_3.png" /> Clipped_geomorp'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Melila_Shp_1.setVisible(true);lyr_Clipped_Drainage_2.setVisible(true);lyr_Clipped_geomorp_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Melila_Shp_1,lyr_Clipped_Drainage_2,lyr_Clipped_geomorp_3];
lyr_Melila_Shp_1.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_Clipped_Drainage_2.set('fieldAliases', {'ORDER1': 'ORDER1', });
lyr_Clipped_geomorp_3.set('fieldAliases', {'NAME': 'NAME', 'TYPE1': 'TYPE1', 'TYPE2': 'TYPE2', });
lyr_Melila_Shp_1.set('fieldImages', {'id': '', 'name': '', });
lyr_Clipped_Drainage_2.set('fieldImages', {'ORDER1': 'Range', });
lyr_Clipped_geomorp_3.set('fieldImages', {'NAME': 'TextEdit', 'TYPE1': 'TextEdit', 'TYPE2': 'TextEdit', });
lyr_Melila_Shp_1.set('fieldLabels', {'id': 'no label', 'name': 'no label', });
lyr_Clipped_Drainage_2.set('fieldLabels', {'ORDER1': 'no label', });
lyr_Clipped_geomorp_3.set('fieldLabels', {'NAME': 'no label', 'TYPE1': 'no label', 'TYPE2': 'no label', });
lyr_Clipped_geomorp_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});