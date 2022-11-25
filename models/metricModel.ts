class metrics {
    private metric_name: string;
    private metric_value: number;
    private metric_last_usage?: Date;
    private metric_max_usage?: number;
    private metric_enabled: boolean;
    private icon_code?: string;
    private icon_background?: string;

    constructor(
        metric_name: string, 
        metric_value: number,
        metric_last_usage?: Date,
        metric_max_usage?: number,
        metric_enabled?: boolean,
        icon_code?: string,
        icon_background?: string
    ){
        this.metric_name = metric_name;
        this.metric_value = metric_value;
        this.metric_last_usage = metric_last_usage;
        this.metric_max_usage = metric_max_usage;
        this.metric_enabled = metric_enabled || false;
        this.icon_code = icon_code
        this.icon_background = icon_background
    }
}

export default metrics;