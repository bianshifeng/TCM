QT += qml quick sql
QT += widgets core gui
TARGET = AVManager

QTPLUGIN += qsqlite

include(src/src.pri)

RESOURCES += \
    qml.qrc
