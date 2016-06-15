import QtQuick 2.4
import QtQuick.Controls 1.2
import "../Controls"
import "../Fonts/XmsIconFont.js" as FontName
import "../Controls/UIConstants.js" as UI
import "../UserControls"
import "../Models"

Column{
    id: id_root
    anchors.left: parent.left
    anchors.right: parent.right
    property string tapIndex:"123"
    property alias tapTitle: id_CAP_Title.text


    Item{
        id: id_CAP_header
        width: parent.width
        height: 50
        Rectangle{
            anchors.fill: parent
            color:"#090807"
        }

        FlatButton{
            id: id_CAP_Title
            anchors.top: parent.top
            anchors.bottom: parent.bottom
            anchors.left: parent.left
            width: 150
            icon: FontName.ICON_BASE_INFO
            text: "黄芽汤"
            size:20
            hoverColor: UI.COLOR_BASE_TRANSPARENT
            onClicked: {
                id_CAP_info_panel.visible = id_CAP_info_panel.visible ? false : true
            }
        }

        FlatButton{
            anchors.top: parent.top
            anchors.bottom: parent.bottom
            anchors.right: parent.right
            width: 100
            icon:FontName.ICON_ACTION_RIGHT
            text: "完成"
            onClicked: {
                console.log("save 药房")
            }
        }
    }

    Item{
        id: id_CAP_info
        visible: false
        width: parent.width
        height: 50

    }

    Rectangle{
        id: id_CAP_panel
        height:400

        anchors.left: parent.left
        anchors.right: parent.right
        color:"#090807"
        border.width: 1
        border.color: "black"

        ListModel{
            id: id_CAP_herbList
        }


        Flow{
            spacing: 2
            anchors.top: parent.top
            anchors.left: parent.left
            anchors.right: parent.right
            anchors.bottom:id_modify_panel.top
            anchors.margins: 2
            ExclusiveGroup{
                id: id_group
            }

            Repeater{
                model:id_CAP_herbList
                CAP_HerbCtrl{
                    herbInfo: model
                    exclusiveGroup: id_group
                    onClicked: {
                        checked = true

                    }
                    onDoubleClicked: {
                        id_modify_panel.visible = true
                        id_modify_panel.modifyModel = herbModel

                    }
                }
            }
        }


        ControlCard{
            id: id_modify_panel
            visible: false
            anchors.left: parent.left
            anchors.right: parent.right
            anchors.bottom: parent.bottom
            anchors.bottomMargin: 20
            height: 60
            property Model_Herbs modifyModel

            Item{
                anchors.fill: parent

                TextEdit{
                    anchors.fill: parent
                    text: id_modify_panel.modifyModel ? id_modify_panel.modifyModel.name : ""
                    color:"white"
                    anchors.margins: 10
                    font.pixelSize: 20

                    onTextChanged: {
                        id_modify_panel.modifyModel.name = text
                    }

                }


            }


            Button{
                text:"X"
                onClicked: id_modify_panel.visible = false
            }

        }



    }


    function addHerb(modelInfo){
        console.log(JSON.stringify(modelInfo))
        id_CAP_herbList.append(modelInfo)

    }



}

