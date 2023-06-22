import classes from './BonusPage.module.scss';
import ArrowIcon from '../../../assets/icon/arrow.svg';
import FireIcon from '../../../assets/icon/fire.svg';
import InfoIcon from '../../../assets/icon/information.svg';
import { useCreateAccessTokenQuery } from 'api/generateToken/generateToken';
import { useGiveInfoBonusQuery } from 'api/infoBonus/infoBonus';
import {formatDate} from "utils/formatDate";

const BonusPage = () => {
    const { data: accessTokenData, isLoading } = useCreateAccessTokenQuery();
    const accessToken = accessTokenData?.accessToken;
    const { data: infoBonusData } = useGiveInfoBonusQuery(accessToken);

    if (isLoading) {
        return <div>Loading...</div>
    }

    const { data } = infoBonusData;
    const currentQuantity = data ? data.currentQuantity : '';
    const forBurningQuantity = data ? data.forBurningQuantity : '';
    const formattedDate = formatDate(data ? data.dateBurning : '');

    return (
        <section className={classes.container}>
            <div className={classes.background}>
                <div className={classes.infoWindow}>
                    <div className={classes.hat}>
                        Логотип
                        <InfoIcon />
                    </div>
                    <div className={classes.bonusInfo}>
                        <p className={classes.bonusCount}>{currentQuantity}</p>
                        <p className={classes.expireInfo}>
                            {formattedDate} сгорит
                            <FireIcon width={'13'} height={'17'} />
                            {forBurningQuantity} бонусов
                        </p>
                    </div>
                    <ArrowIcon />
                </div>
            </div>
        </section>
    );
};

export default BonusPage;
