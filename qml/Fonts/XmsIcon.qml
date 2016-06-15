import QtQuick 2.0
BaseIcon{
    id: id_root
    size: 16
    property bool rotate:false
    XmsIconLoader{
        id: id_fonter
    }
    smooth: true
    antialiasing: true
    font.family: id_fonter.name
    color:"white"
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
