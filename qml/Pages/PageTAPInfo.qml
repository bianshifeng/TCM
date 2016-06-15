import QtQuick 2.0
import QtQuick.Controls 1.2
import QtQuick.Layouts 1.1
import QtQuick.LocalStorage 2.0


Item{
    id: id_root
    implicitHeight: 500
    implicitWidth: 600
    property alias infoListModel: id_listModel

    signal selectedItem(var itemInfo)
    ListModel{
        id: id_listModel
        ListElement{
            itemName:"金银花"
            itemId:"1001"
            itemIndex:1
            itemType:"金"
        }
        ListElement{
            itemName:"金银花"
            itemId:"1001"
            itemIndex:1
            itemType:"木"
        }
        ListElement{
            itemName:"金银花"
            itemId:"1001"
            itemIndex:1
            itemType:"水"
        }
        ListElement{
            itemName:"金银花"
            itemId:"1001"
            itemIndex:1
            itemType:"土"
        }
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
                    text: itemName
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


