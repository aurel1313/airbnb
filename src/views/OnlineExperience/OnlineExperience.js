import React, { useState, useEffect, useRef, useMemo } from 'react'
import { Feature, Map, View } from 'ol'
import TileLayer from 'ol/layer/Tile'

import OSM from 'ol/source/OSM'

import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector'

import Point from 'ol/geom/Point'

import Icon from 'ol/style/Icon'
import Style from 'ol/style/Style'
import IMG from '../../../src/assets/imgs/location.png'
import { Overlay } from 'ol'

import { toStringHDMS } from 'ol/coordinate.js'
import { fromLonLat } from 'ol/proj'
import { toStringXY } from 'ol/coordinate'
import Marker from 'ol-marker-feature'
import { renderToString } from 'react-dom/server'
import Popup from 'ol-popup'
import { Popups } from '../../Component/Popup/Popups'
export const OnlineExperience = () => {
    const [map, setMap] = useState(null)
    const mapElement = useRef(null)
    const mapRef = useRef(null)
    const [position, setPosition] = useState([0, 0])

    useEffect(() => {
        let overlay = new Overlay({
            element: document.getElementById('popup'),
            positioning: 'center-left',

            autoPan: false,
            stopEvent: true,

            autoPanAnimation: {
                duration: 250,
            },
        })
        const vectorSource = new VectorSource()
        const initialMap = new Map({
            target: mapElement.current,
            layers: [
                new TileLayer({
                    preload: Infinity,
                    source: new OSM(),
                }),
                new VectorLayer({
                    source: vectorSource,
                    style: new Style({
                        image: new Icon({
                            anchor: [0.5, 46],
                            anchorXUnits: 'fraction',
                            anchorYUnits: 'pixels',
                            src: IMG,
                        }),
                    }),
                }),
            ],
            overlays: [overlay],
            view: new View({
                center: [0, 0],
                zoom: 0,
            }),
        })

        // display popup on click

        initialMap.on('click', function (evt) {
            const popup = new Popup()

            initialMap.addOverlay(popup)
            var prettyCoord = toStringHDMS(
                evt.coordinate,

                1
            )

            /*popup.show(
                evt.coordinate,
                '<div id="info" class="bg-white border border-rounded"><h2>Coordinates</h2><p>' +
                    prettyCoord +
                    '</p></div>'
            )*/
            popup.show(
                evt.coordinate,
                renderToString(<Popups coordinate={prettyCoord} />)
            )

            const feature = new Feature({
                geometry: new Point(evt.coordinate),
            })
            // Add styling and logic as needed
            vectorSource.addFeature(feature)
            let info = document.getElementById('info')

            info.addEventListener('click', () => {
                /*vectorSource.getFeatures().forEach((el) => {
                    vectorSource.removeFeature(el)
                })*/

                if (vectorSource.getFeaturesAtCoordinate(evt.coordinate)) {
                    popup.hide()
                    vectorSource.removeFeature(
                        vectorSource.getFeaturesAtCoordinate(evt.coordinate)[0]
                    )
                }
            })
        })

        //cursor mouse on marker//
        initialMap.on('pointermove', function (e) {
            const pixel = initialMap.getEventPixel(e.originalEvent)
            const hit = initialMap.hasFeatureAtPixel(pixel)
            initialMap.getTarget().style.cursor = hit ? 'pointer' : ''
        })

        setMap(initialMap)
        return () => initialMap.setTarget(null)
    }, [position])

    return (
        <div>
            <div
                style={{ height: '100vh', width: '100%' }}
                ref={mapElement}
                className="map-container"
                id="map"
            ></div>
        </div>
    )
}
