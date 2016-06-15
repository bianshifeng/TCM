import QtQuick 2.2
import QtQuick.Controls 1.2
import QtQuick.Controls.Private 1.0
import QtQuick.Controls.Styles 1.1
import QtQuick.Window 2.1


Text{
    id: id_root
    property int size:12
    property string tooltip:text
    property bool defaultFont:true
    property bool isMouseEnable:true
    property alias cursorShape:id_mouseArea.cursorShape
    signal emitClick()
    signal emitPressed()
    signal emitReleased()
    signal emitExited()
    signal emitEntered()
    font.pixelSize: size
    MouseArea {
        id: id_mouseArea
//        property bool keyPressed: false
//        property bool effectivePressed: pressed && containsMouse || keyPressed
        visible:  isMouseEnable
        anchors.fill: parent
        hoverEnabled: true
        onExited: {
            Tooltip.hideText()
            emitExited()
        }
        onEntered: {
            emitEntered()
        }

        onCanceled: Tooltip.hideText()
        Timer {
            interval: 1000
            running: id_mouseArea.containsMouse && tooltip.length
            onTriggered: Tooltip.showText(id_mouseArea, Qt.point(id_mouseArea.mouseX, id_mouseArea.mouseY), tooltip)
        }
        onPressed: {
            emitPressed()

        }

        onReleased: {
            emitReleased()

        }

        onClicked: {
            id_root.emitClick()
        }
    }
}
