import { CardI } from '../../common/util/App.dto';

export interface AppContxtObj {
    cards: CardI[],
    currentCardId: string;
    photoSrcOrigin: string;
}

export const appContxtObj: AppContxtObj = {
    cards: [],
    currentCardId: '',
    photoSrcOrigin: '',
}