import QtQuick 2.2
import QtQuick.Controls 1.1
import "./UIConstants.js" as UI
Item{
    id: id_root
    implicitHeight: id_back.height
    implicitWidth: id_back.width

    property alias tooltip: id_title.tooltip

    signal emitClicked()
    signal clicked()
    signal entered()
    signal exited()

    //for image
    property alias normalImage:id_back.source
    property alias hoverImage: id_hover.source
    property alias selectImage:id_select.source





    //for back
    property bool isShowBackgroud:false
    property int backgroudBorderWidth:0
    property color backgroudBorderColor:UI.color_app_bt_normal

    property alias titleText:id_title.text
    property alias titleSize: id_title.size
    property color titleNormalColor:UI.color_app_bt_normal
    property color titleHoverColor:UI.color_app_bt_hover
    property color titleSelectColor:UI.color_app_bt_select

    //normalColor:
    //hoverColor:
    //selectColor:
    property alias normalColor:id_back_mask.color
    property alias hoverColor:id_hover_mask.color
    property alias selectColor:id_select_mask.color


    property bool txtCenter:true
    property int leftIconWidth: 0


    property bool isClickButton:false
    property bool checked: false
    property ExclusiveGroup exclusiveGroup: null
    onExclusiveGroupChanged: {
        if (exclusiveGroup)
            exclusiveGroup.bindCheckable(id_root)
    }

    Item{
        id:id_container
        anchors.fill: parent
        Rectangle{
            id: id_back_mask
            opacity: id_back.opacity
            anchors.fill: parent
            visible: isShowBackgroud
            color:UI.color_app_mainActivegroud
            border.width: id_root.backgroudBorderWidth
            border.color: id_root.backgroudBorderColor

        }
        Image{
            id:id_back
            opacity: id_root.checked ? 0 : 1
            antialiasing: true
            smooth: true
        }
        Rectangle{
            id: id_hover_mask
            opacity: id_hover.opacity
            anchors.fill: parent
            visible: isShowBackgroud
            color:UI.color_app_mainforegroud
        }
        Image{
            id:id_hover
            opacity: 0
            antialiasing: true
            smooth: true
        }
        Rectangle{
            id: id_select_mask
            opacity: id_select.opacity
            anchors.fill: parent
            visible: isShowBackgroud
            color:UI.color_app_mainforegroud
        }
        Image{
            id:id_select
            opacity: id_root.checked ? 1 : 0
            antialiasing: true
            smooth: true
        }
    }

    onCheckedChanged: {
        if(!checked)
            id_title.color = titleNormalColor
    }




    MouseArea{
        id: id_mouseArea
        hoverEnabled: true
        anchors.fill: parent
        cursorShape:Qt.PointingHandCursor
        onEntered:id_root.btEntered()
        onExited:id_root.btExited()
        onPressed:id_root.btPressed()
        onReleased:id_root.btReleased()
        onClicked:id_root.btClicked()

        XmsText {
            id: id_title
            size:UI.font_size_h5
            cursorShape: id_mouseArea.cursorShape
            anchors.verticalCenter: parent.verticalCenter
            color: checked ? titleSelectColor :titleNormalColor
            elide: Text.ElideRight

            onEmitClick: id_root.btClicked()
            onEmitPressed:id_root.btPressed()
            onEmitReleased:id_root.btReleased()
            onEmitEntered:id_root.btEntered()
            onEmitExited:id_root.btExited()
            Component.onCompleted: {
                refreshTitle()
            }


            function refreshTitle(){
                if(id_root.txtCenter){
                    id_title.anchors.horizontalCenter = id_mouseArea.horizontalCenter
                    id_title.width =  id_mouseArea.width
                    id_title.horizontalAlignment =Text.AlignHCenter
                }else{
                    id_title.anchors.left = id_mouseArea.left
                    id_title.anchors.leftMargin = leftIconWidth
                    id_title.width =  id_mouseArea.width - leftIconWidth
                    id_title.horizontalAlignment = Text.AlignLeft
                }
            }

        }
    }

    function btEntered(){
        id_hover.opacity = 1
        if(!checked)
            id_title.color = titleHoverColor
        id_root.entered()

    }
    function btExited(){
        id_hover.opacity = 0
        if(!checked)
            id_title.color = titleNormalColor

        id_root.exited()

    }
    function btPressed(){
        checked = true
        id_title.color = titleSelectColor

    }
    function btReleased(){
        if(isClickButton){
            checked = false
            id_title.color = titleHoverColor
        }

    }
    function btClicked(){
        id_root.emitClicked()
        id_root.clicked()

    }


    transitions: [
        Transition {
            NumberAnimation{
                targets: [id_select_mask,id_back_mask,id_hover_mask]
                properties: "opacity"
                duration: 1000
                easing.type: Easing.InBack
                easing.bezierCurve: [0.4,0,0.2,1,1,1]

            }

//            ColorAnimation {
//                targets: [id_topShadow,id_bottomShadow]
//                duration: 200
//            }
        }
    ]


    onWidthChanged: {
        id_title.refreshTitle()
    }

}
