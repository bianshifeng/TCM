import QtQuick 2.0
import QtQuick.Controls 1.2
import QtQuick.Layouts 1.1
import QtQuick.LocalStorage 2.0
import "../Models"


Item{
    id: id_root
    implicitHeight: 500
    implicitWidth: 600
    property alias infoListModel: id_listModel

    signal selectedItem(var itemInfo)

    Model_Herbs{
        id: id_model
    }

    ListModel{
        id: id_listModel

        function createTestData(){
            id_listModel.clear()
            id_listModel.append(id_model.getListThumb())
            id_listModel.append(id_model.getListThumb())
            id_listModel.append(id_model.getListThumb())
            id_listModel.append(id_model.getListThumb())

        }

        Component.onCompleted: id_listModel.createTestData()

    }

    Flow{
        anchors.fill: parent
        spacing: 10
        Repeater{
            model: id_listModel
            Item{
                width: 100
                height: 50
                Rectangle{
                    anchors.fill: parent
                    color:"red"
                    border.width: 1
                    border.color: "black"
                }
                Text {
                    text: herbsName
                    anchors.centerIn: parent
                }

                MouseArea{
                    anchors.fill: parent
                    onClicked: {
                        id_root.selectedItem(model)
                    }
                }
            }
        }
    }


}


