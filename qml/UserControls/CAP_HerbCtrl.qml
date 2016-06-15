import QtQuick 2.4
import "../Controls"
import "../Fonts"
import "../Controls/UIConstants.js" as UI
import "../Fonts/XmsIconFont.js" as FontName
import "../Models"

ControlCard{
    id: id_root
    width: 198
    height: 60

    property var herbInfo
    property alias herbModel: id_model

    signal clicked
    signal doubleClicked

    onHerbInfoChanged: {
        if(herbInfo)
            id_model.setListThumb(herbInfo)
    }

    Item{
        anchors.fill: parent
        anchors.margins: 16

        Model_Herbs{
            id: id_model
        }

        Column{
            anchors.left: parent.left
            anchors.right:id_icon_handle.left
            anchors.verticalCenter: parent.verticalCenter
            spacing: 6
            XmsText {
                id: id_tx_name
                text: id_model.name
                color:"white"
                size: 18

            }
            XmsText{
                id: id_tx_dosage
                size: 12
                anchors.left: parent.left
                anchors.leftMargin: 2
                text: id_model.dosage + id_model.unit
                color:UI.COLOR_BASE_ORANGE
            }

        }


        MouseArea{
            anchors.fill: parent
            onClicked:id_root.clicked()
            onDoubleClicked: id_root.doubleClicked()
        }

        FlatButton{
            id: id_icon_handle
            width: 20
            height: 20
            anchors.right: parent.right
            anchors.verticalCenter: parent.verticalCenter
            icon:FontName.ICON_ALG_SPY
            onClicked: id_root.doubleClicked()
            toolTip: "详情"

        }


    }

}
