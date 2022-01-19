import { MbscPopupOptions } from '../../core/components/popup/popup';
import { MbscPopup } from './popup';
export declare class MbscSnackbar {
    popup: MbscPopup;
    button?: {
        action?: () => void;
        icon?: string;
        text?: string;
    };
    message: string;
    props: MbscPopupOptions;
    onButtonClick(): void;
}
