#include "websystetraymenu.h"
#include <QApplication>
#include <QMessageBox>

WebSysteTrayMenu::WebSysteTrayMenu(QObject *parent) : QSystemTrayIcon(parent)
{
    if (!QSystemTrayIcon::isSystemTrayAvailable()) {
         QMessageBox::critical(0, QObject::tr("Systray"),
                                  QObject::tr("I couldn't detect any system tray "
                                              "on this system."));
         return;
     }


    m_ptrTrayMenu = new QMenu();

    m_trayMenu_Show_Action = new QAction(m_ptrTrayMenu);
    m_trayMenu_Show_Action->setText("show");


    m_ptrTrayMenu->addAction(m_trayMenu_Show_Action);
    m_ptrTrayMenu->addSeparator();

    this->setContextMenu(m_ptrTrayMenu);
    this->setIcon(QIcon(":/images/images/branding.ico"));

    connect(m_trayMenu_Show_Action,SIGNAL(triggered(bool)),SIGNAL(sigShowView()));
    connect(this,SIGNAL(activated(QSystemTrayIcon::ActivationReason)),this,SLOT(slotMenuDoubleClick(QSystemTrayIcon::ActivationReason)));


}

WebSysteTrayMenu::~WebSysteTrayMenu()
{
    qApp->setQuitOnLastWindowClosed(true);
}

void WebSysteTrayMenu::slotMenuDoubleClick(QSystemTrayIcon::ActivationReason _reason)
{
    if(_reason == QSystemTrayIcon::DoubleClick){
        emit sigShowView();
    }

}

