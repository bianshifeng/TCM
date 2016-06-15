/****************************************************************************
**
** Copyright (C) 2014 Digia Plc and/or its subsidiary(-ies).
** Contact: http://www.qt-project.org/legal
**
** This file is part of the Qt Quick Controls module of the Qt Toolkit.
**
** $QT_BEGIN_LICENSE:BSD$
** You may use this file under the terms of the BSD license as follows:
**
** "Redistribution and use in source and binary forms, with or without
** modification, are permitted provided that the following conditions are
** met:
**   * Redistributions of source code must retain the above copyright
**     notice, this list of conditions and the following disclaimer.
**   * Redistributions in binary form must reproduce the above copyright
**     notice, this list of conditions and the following disclaimer in
**     the documentation and/or other materials provided with the
**     distribution.
**   * Neither the name of Digia Plc and its Subsidiary(-ies) nor the names
**     of its contributors may be used to endorse or promote products derived
**     from this software without specific prior written permission.
**
**
** THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
** "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
** LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
** A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
** OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
** SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
** LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
** DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
** THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
** (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
** OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE."
**
** $QT_END_LICENSE$
**
****************************************************************************/

import QtQuick 2.2
import QtQuick.Controls 1.2
import QtQuick.Layouts 1.1
import QtGraphicalEffects 1.0
import "./Theme"
import "./Pages"
import "./Controls"
import "./Controls/UIConstants.js" as UI
import "./Fonts"
import "./Fonts/XmsIconFont.js" as FontName
import "./Models"
import "./UserControls"



Item {
    visible: true
    width: 940
    height: 800



    Rectangle{
        id: id_back
        anchors.fill: parent
        opacity:1
        color:UI.COLOR_BASE_BLACK_BASE
    }
//    PageImageTheme{
//        anchors.fill: parent
//    }

    Text {
        id: id_info
        visible: id_model.count >0 ? false : true
        text: qsTr("无数据")
        anchors.centerIn: parent
        z:2
    }



    SystemPalette{
        id: id_sysStyle
    }

    ListModel{
        id: id_model

        ListElement{
            actorname:"hello"
            breast:"1"
            hip:"12"
            waist:"12"
        }

        function getData(){
            var getUrl = "http://localhost:8080/list"
            var http = new XMLHttpRequest()
            http.onreadystatechange = function(){
                if(http.readyState == 4 ){ //4 loaded
                    if(http.status == 200){//200 ok
                        var xx = http.responseText
                        console.log(xx)

                        id_model.createListModel(xx)
                    }

                }else{
                    id_info.text = "无法连接"

                }
            }

            http.open("get",getUrl,true)

            http.send()

        }

        function createListModel(strJsonData){

            id_model.clear()
            var t_array =[]
            t_array = JSON.parse(strJsonData)
            id_model.append(t_array)


        }
    }



    Component.onCompleted: id_model.getData()

    Item{
        id: id_app_bar
        anchors.left: parent.left
        anchors.right: parent.right
        anchors.top: parent.top
        height:30
    }

    Column{
        anchors.left: parent.left
        anchors.right: parent.right
        anchors.top: id_app_bar.bottom

        PageTAPManager{
            id: id_tap_container
        }

        Column{
            id: id_herb_ctr
            Rectangle{
                width: 200
                height: 30
                border.color: "black"
                border.width: 2
                TextInput{
                    id: id_herbal_input
                    anchors.left: parent.left
                    anchors.right: parent.right
                    anchors.margins: 4
                    anchors.verticalCenter: parent.verticalCenter
                    font.pixelSize: 24
                    onActiveFocusOnPressChanged: {
                        id_herbal_input.text = "sdfsdf"
                    }
                    onTextChanged: {
                        var searchObj ={

                        }

                        id_herb_search.reSearchData(searchObj)
                        id_current_herbs.name = text
                    }
                    Model_Herbs{
                        id: id_current_herbs
                        name: id_herbal_input.text
                    }
                }
            }

            function setHerbModel(modelInfo){
                id_current_herbs.setListThumb(modelInfo)
                id_herbal_input.text = id_current_herbs.name
            }

            Row{
                ListModel{
                    id: id_listModel
                    ListElement{
                        numValue: 20
                        numDanwei:"g"
                        numValueResult:"黄元御介意重用"
                    }
                }
                Repeater{
                    id: id_number_repeater
                    model:id_listModel
                    Button{
                        width: 80
                        height: 20
                        tooltip: numValueResult
                        text:numValue + numDanwei
                    }
                }
            }
            Button{
                width: 100
                height: 20
                text:"save"
                onClicked: id_tap_container.addHerb(id_current_herbs.getListThumb())
            }

        }

        PageHerbSearch{
            id: id_herb_search
            onSelectedItem: {
                id_herb_ctr.setHerbModel(itemInfo)
            }

        }



    }
    ListView{
        id: id_view
        model: id_model
        visible: false

        delegate: Rectangle{
            width: 200
            height: 40
            Column{

                Text {
                    text:  actorname
                }
                Text {
                    text: "B:" + breast + " H:" +hip+ " W:" +waist
                }
                anchors.centerIn: parent
                spacing: 4


                Text {
                    text: "sdfds"
                }
            }

            color:id_sysStyle.button
            border.width: 1
            border.color: "black"
        }
    }

    Button{
        text:"getData"
        z:1000
        anchors.bottom: parent.bottom

        onClicked: {
            id_info.text = "加载数据"
            id_model.clear()
            id_model.getData()
        }

    }


}
