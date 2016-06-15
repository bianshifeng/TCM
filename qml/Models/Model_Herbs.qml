import QtQuick 2.0

QtObject{
    id: id_root
    objectName: "ModelHerbs"
    property string index:"1001"
    property string name:"sdfsdfsdf"
    property string image:""
    property string info:""
    property string unit:"g"
    property int dosage:10
    property string dosageReason:"10g可以入心烦"
    property string usage:"煎服"
    property string usageReason:""

    function getListThumb(){
        var t = {
            herbsName:id_root.name,
            herbsIndex:id_root.index,
            herbsInfo: id_root.info,
            herbsDosage:id_root.dosage,
            herbsUnit:id_root.unit
        }

        return t;
    }

    function setListThumb(objInfo){

        id_root.name = objInfo.herbsName
        id_root.dosage = objInfo.herbsDosage
        id_root.unit = objInfo.herbsUnit
        id_root.index = objInfo.herbsIndex
    }
}

