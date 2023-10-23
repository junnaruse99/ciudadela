import { IHuman, IHumanData } from "@/interfaces/IHuman";
import { IPagination, intialPagination } from "@/interfaces/IPagination";
import HumanService from "@/services/humanService";
import { Grid, Pagination, Skeleton } from "@mui/material";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import HumanComponent from "./human";
import styles from "@/styles/human.module.css"

const ListHumanComponent = () => {
    const [humanData, setHumanData] = useState<IHumanData | undefined>();
    const [paginationDetails, setPagiantionDetails] = useState<IPagination>({...intialPagination});

    useEffect(() => {
        getHumanData(paginationDetails);
    }, []);

    function getHumanData(pagination: IPagination) {
        HumanService.getHumans(pagination).then((response) => {
            if (response.status !== 200) throw new Error();
            setHumanData(response.data);
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }).catch((error) => {
            toast.error("Error while fetching data");
            setHumanData({pages: 0, items: []})
        });
    }

    function onPaginationChange(_: any, page: number) {
        setHumanData(undefined);
        paginationDetails.page = page;
        getHumanData(paginationDetails);
        setPagiantionDetails({...paginationDetails});
    }

    return (
        <div className={styles.humanBody}>
            <h1 className={styles.humanTitle}>Humans</h1>
            <Grid container spacing={2}>
            {
                (humanData?.items || new Array(9).fill(undefined)).map((human: IHuman | undefined, idx: number) => (
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <HumanComponent key={human?.id || idx} human={human} />
                    </Grid>
                ))
            }
            </Grid>
            <Pagination size="large" className={styles.pagination} count={humanData?.pages || 1} shape="rounded" onChange={onPaginationChange} />
        </div>

    )
}

export default ListHumanComponent;