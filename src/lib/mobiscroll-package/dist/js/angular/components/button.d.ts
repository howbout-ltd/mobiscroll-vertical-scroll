import { ButtonBase } from '../../core/components/button/button';
import { MbscCustomEndIcon, MbscCustomIcon, MbscCustomStartIcon } from './icon';
export declare class MbscButton extends ButtonBase {
    _customIcon: MbscCustomIcon;
    _customStartIcon: MbscCustomStartIcon;
    _customEndIcon: MbscCustomEndIcon;
    color: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light';
    disabled: boolean;
    endIcon: string;
    endIconSrc: string;
    endIconSvg: string;
    icon: string;
    iconSvg: string;
    iconSrc: string;
    ripple: boolean;
    startIcon: string;
    startIconSrc: string;
    startIconSvg: string;
    tabIndex: number;
    variant: 'standard' | 'flat' | 'outline';
}
