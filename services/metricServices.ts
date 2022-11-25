import MetricController from "../controllers/MetricController";
import Metric from "../models/metricModel";

class metricServices {
    public getSimpleMetrics(): Array<T>{
        let metrics = [
            {
                metric_name: "Conversations",
                metric_value: 2500,
                metric_last_usage: null,
                metric_max_usage: null,
                metric_enabled: true,
            },
            {
                metric_name: "Contacts",
                metric_value: 140000,
                metric_last_usage: null,
                metric_max_usage: null,
                metric_enabled: true,
            },
            {
                metric_name: "Agents",
                metric_value: 22,
                metric_last_usage: null,
                metric_max_usage: null,
                metric_enabled: true,
            },
            {
                metric_name: "WhatsApp",
                metric_value: 60,
                metric_last_usage: "12:02:00",
                metric_max_usage: 100,
                metric_enabled: true,
                icon_code: "channel-whatsapp",
                icon_background: "#25D366"
            },
            {
                metric_name: "Twitter",
                metric_value: 72,
                metric_last_usage: "12:00:00",
                metric_max_usage: 100,
                metric_enabled: true,
                icon_code: "channel-twitter",
                icon_background: "#1DA1F2"
            },
            {
                metric_name: "Instagram",
                metric_value: 48,
                metric_last_usage: "10:15:00",
                metric_max_usage: 100,
                metric_enabled: true,
                icon_code: "channel-instagram",
                icon_background: "#F00073"
            },
            {
                metric_name: "Email",
                metric_value: 35,
                metric_last_usage: "11:21:00",
                metric_max_usage: 100,
                metric_enabled: true,
                icon_code: "channel-email",
                icon_background: "#184ABC"
            },
            {
                metric_name: "Custom (API)",
                metric_value: 0,
                metric_last_usage: null,
                metric_max_usage: null,
                metric_enabled: false,
                icon_code: null,
                icon_background: null,
            },
            {
                metric_name: "Website Chat",
                metric_value: 60,
                metric_last_usage: "12:02:00",
                metric_max_usage: 100,
                metric_enabled: true,
                icon_code: "channel-website-chat",
                icon_background: "#DC6803"
            },
            {
                metric_name: "SMS",
                metric_value: 72,
                metric_last_usage: "12:00:00",
                metric_max_usage: 100,
                metric_enabled: true,
                icon_code: "channel-sms",
                icon_background: "#008933"
            },
            {
                metric_name: "Telegram",
                metric_value: 48,
                metric_last_usage: "10:15:00",
                metric_max_usage: 100,
                metric_enabled: true,
                icon_code: "channel-telegram",
                icon_background: "#0088CC"
            },
            {
                metric_name: "LINE",
                metric_value: 35,
                metric_last_usage: "11:21:00",
                metric_max_usage: 100,
                metric_enabled: true,
                icon_code: "channel-line",
                icon_background: "#00BC00"
            },
            {
                metric_name: "Facebook Messenger",
                metric_value: 0,
                metric_last_usage: "09:16:00",
                metric_max_usage: 100,
                metric_enabled: true,
                icon_code: "channel-facebook",
                icon_background: "#1877F2"
            }
        ]

        let metrics_test = [            
            "Conversations",
            2500,
            null,
            null,
            true,
        ]

        let args = metrics_test[0]
        const obj = new Metric(args)
        console.log(obj)

        // metrics.forEach((metric) => {
        //     const obj = new Metric([...metric]);
        // })
    }
}

export default metricServices;