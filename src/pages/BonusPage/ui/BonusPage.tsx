import classes from './BonusPage.module.scss';
import ArrowIcon from '../../../assets/icon/arrow.svg';
import FireIcon from '../../../assets/icon/fire.svg';
import InfoIcon from '../../../assets/icon/information.svg';
import { useCreateAccessTokenQuery } from 'api/generateTokenApi/generateToken';
import { useGiveInfoBonusQuery } from 'api/infoBonusApi/infoBonus';
import {formatDate} from "utils/formatDate";

const BonusPage = () => {
    const { data: accessTokenData, isLoading: tokenLoader } = useCreateAccessTokenQuery();
    const accessToken = accessTokenData?.accessToken;
    const { data: infoBonusData } = useGiveInfoBonusQuery(accessToken);

    if (tokenLoader) {
        return <div className={classes.loader}>Отправляется запрос в космос...</div>
    }


    const { data } = infoBonusData;
    const currentQuantity = data ? data.currentQuantity : '';
    const forBurningQuantity = data ? data.forBurningQuantity : '';
    const formattedDate = formatDate(data ? data.dateBurning : '');


    return (
        <section className={classes.container}>
            <div className={classes.background}>
                {data && (
                    <div className={classes.wrapper}>
                        <div className={classes.hat}>
                            <span className={classes.textLogo}>Логотип</span>
                            <InfoIcon />
                        </div>
                        <div className={classes.infoWindow}>
                            <div className={classes.bonusInfo}>
                                <p className={classes.bonusCount}>{currentQuantity} бонусов</p>
                                <p className={classes.expireInfo}>
                                    {formattedDate} сгорит
                                    <FireIcon width={'13'} height={'17'}/>
                                    {forBurningQuantity} бонусов
                                </p>
                            </div>
                            <ArrowIcon/>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default BonusPage;
