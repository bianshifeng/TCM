import QtQuick 2.0
import QtQuick.Controls 1.2
import QtQuick.Layouts 1.1
import QtQuick.LocalStorage 2.0
import "../Models"
import "../Controls"


Item{
    id: id_root
    implicitHeight: 500
    implicitWidth: 600
    property alias infoListModel: id_listModel

    signal selectedItem(var itemInfo)

    Model_Herbs{
        id: id_baseModel
    }

    ListModel{
        id: id_listModel

        function createTestData(){
            id_listModel.clear()
            id_baseModel.name = "甘草"
            id_listModel.append(id_baseModel.getListThumb())
            id_baseModel.name = "麻黄"
            id_listModel.append(id_baseModel.getListThumb())
            id_baseModel.name = "人参"
            id_listModel.append(id_baseModel.getListThumb())
            id_baseModel.name = "茯苓"
            id_listModel.append(id_baseModel.getListThumb())

        }


    }

    Flow{
        anchors.fill: parent
        spacing: 10
        ExclusiveGroup{
            id: id_group
        }

        Repeater{
            model: id_listModel

            ControlCard{
                id: id_container
                exclusiveGroup: id_group
                width: 100
                height: 40
                Text {
                    text: herbsName
                    anchors.centerIn: parent
                }
                MouseArea{
                    anchors.fill: parent
                    onClicked: {
                        id_root.selectedItem(model)
                        id_container.checked = true

                    }
                }
            }
        }
    }

    function reSearchData(searchObj){
    }


    Component.onCompleted: id_listModel.createTestData()

}


