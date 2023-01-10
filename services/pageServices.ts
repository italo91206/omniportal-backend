class PageServices {
    public getPage(): Object{
        let page = {
            layout_page: "",
            layout_configs: {
                rows: [
                    {
                        row_id: "",
                        row_name: "",
                        row_title: "",
                        row_columns_quantity: "3",
                        row_columns_elements: [
                            {
                                element_type: "card",
                                metric_name: "Conversations",
                                metric_to_fetch: "conversations",
                                metric_value: "2.500"
                            },
                            {
                                element_type: "card",
                                metric_name: "Contacts",
                                metric_to_fetch: "contacts",
                                metric_value: "14.000"
                            },
                            {
                                element_type: "card",
                                metric_name: "Agents",
                                metric_to_fetch: "agents",
                                metric_value: "22"
                            }
                        ]
                    },
                    {
                        row_id: "",
                        row_name: "",
                        row_title: "",
                        row_columns_quantity: 1,
                        row_columns_elements: [
                            {
                                element_type: "table",
                                metric_name: "Channels",
                                metric_to_fetch: "service_channels"
                            }
                        ]
                    }
                ]
            }
        }

        return page;
    }
}

export default new PageServices();