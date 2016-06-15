import QtQuick 2.4
import "../Controls/UIConstants.js" as UI
import "../Fonts/XmsIconFont.js" as FontName
import "../Fonts"


ControlCard{
    id: id_root
    property int size:14
    property color foreColor:"white"
    property string text:""
    property string icon:""
    property string toolTip:""
    normalColor: UI.COLOR_BASE_TRANSPARENT

    signal clicked

    Item{
        anchors.fill: parent

        Row{
            anchors.centerIn: parent
            spacing: 10
            XmsIcon{
                text: id_root.icon
                size: 16
                color:id_root.foreColor
                anchors.verticalCenter: parent.verticalCenter
                tooltip: id_root.toolTip
            }
            XmsText{
                text: id_root.text
                anchors.verticalCenter: parent.verticalCenter
                color:id_root.foreColor
                size: id_root.size
                tooltip: id_root.toolTip
            }
        }


        MouseArea{
            anchors.fill: parent
            onClicked: id_root.clicked()
        }
    }
}
