import QtQuick 2.0
BaseIcon{
    id: id_root
    property bool rotate:false
    smooth: true
    antialiasing: true
    XmsFontLoader{
        id: id_fonter
    }

    size: id_fonter.fontSize
    font.family: id_fonter.name
    Behavior on color {
        ColorAnimation { duration: 200 }
    }
    NumberAnimation on rotation {
        running: id_root.rotate
        from: 0
        to: 360
        loops: Animation.Infinite
        duration: 1100
    }
}
