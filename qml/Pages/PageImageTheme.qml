import QtQuick 2.0

Item {
    id: id_root
    property alias backImageUrl: id_backImage.source
    implicitHeight: 500
    implicitWidth: 1000
    Image {
        id: id_backImage
        fillMode: Image.PreserveAspectFit
        source: "qrc:/images/images/page/back.png"
        anchors.fill: parent
    }
}

