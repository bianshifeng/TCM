#ifndef WEBSYSTETRAYMENU_H
#define WEBSYSTETRAYMENU_H

#include <QObject>
#include <QSystemTrayIcon>
#include <QMenu>
#include <QAction>

class WebSysteTrayMenu : public QSystemTrayIcon
{
    Q_OBJECT
public:
    explicit WebSysteTrayMenu(QObject *parent = 0);
    ~WebSysteTrayMenu();

signals:
    void sigShowView();

public slots:
    void slotMenuDoubleClick(QSystemTrayIcon::ActivationReason _reason);

private:
    QMenu *m_ptrTrayMenu;
    //打开
    QAction* m_trayMenu_Show_Action;
    //帮助
    QAction* m_trayMenu_Help_Action;
    //反馈
    QAction* m_trayMenu_FeedBack_Action;
    //设置
    QAction* m_trayMenu_Setting_Action;
    //关于
    QAction* m_trayMenu_About_Action;
    //退出
    QAction* m_trayMenu_Exit_Action;
};

#endif // WEBSYSTETRAYMENU_H


//QObject *root = 0;
//if (engine.rootObjects().size() > 0)
//{
//    root = engine.rootObjects().at(0);

//    QAction *minimizeAction = new QAction(QObject::tr("Mi&nimize"), root);
//    root->connect(minimizeAction, SIGNAL(triggered()), root, SLOT(hide()));
//    QAction *maximizeAction = new QAction(QObject::tr("Ma&ximize"), root);
//    root->connect(maximizeAction, SIGNAL(triggered()), root, SLOT(showMaximized()));
//    QAction *restoreAction = new QAction(QObject::tr("&Restore"), root);
//    root->connect(restoreAction, SIGNAL(triggered()), root, SLOT(showNormal()));
//    QAction *quitAction = new QAction(QObject::tr("&Quit"), root);
//    root->connect(quitAction, SIGNAL(triggered()), qApp, SLOT(quit()));

//    QMenu *trayIconMenu = new QMenu();
//    trayIconMenu->addAction(minimizeAction);
//    trayIconMenu->addAction(maximizeAction);
//    trayIconMenu->addAction(restoreAction);
//    trayIconMenu->addSeparator();
//    trayIconMenu->addAction(quitAction);

//    QSystemTrayIcon *trayIcon = new QSystemTrayIcon(root);
//    trayIcon->setContextMenu(trayIconMenu);
//    trayIcon->setIcon(QIcon(":/qml/Images/branding.ico"));
//    trayIcon->show();
//}
