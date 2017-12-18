export class Constants {

    public levels: any = [
        {
            title: "High",
            content: [
                "- Sierra will read your data and metadata",
                "- This includes location data if you have allowed it"
            ],
            index: 0,
            isActive: true
        },
        {
            title: "Medium",
            content: [
                "- Sierra will read your metadata",
                "- Sierra will not read conversations",
                "- Sierra will not read your location data"
            ],
            index: 1,
            isActive: true
        },
        {
            title: "Low",
            content: [
                "- Sierra will not read any of your inputs",
                "- Sierra will not read conversations"
            ],
            index: 2,
            isActive: true
        }
    ]
}
