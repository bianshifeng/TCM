#ifndef ACTORPRIVATE_H
#define ACTORPRIVATE_H

#include <QSharedData>
#include <QVariant>
#include <QUrl>

class ActorPrivate : public QSharedData
{
public:
    enum LoveType
    {
        FristLove,
        SecondLove,
        ThirdLove,
        FourthLove,
        FifthLove,
        SixthLove,
        NormalLove,
        FirstHate,
        SecondHate
    };

    ActorPrivate();

    QString m_name;
    QUrl m_faceUrl;
    QVariant m_data;
    QString m_key;
    LoveType m_loveType;
};

#endif // ACTORPRIVATE_H
