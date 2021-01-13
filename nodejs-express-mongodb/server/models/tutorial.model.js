module.exports = mongoose => {
    // Declaring our Schema (data structure) for mongoose
    const Tutorial = mongoose.model(
        'tutorial',
        mongoose.Schema(
            {
                title: String,
                description: String,
                published: Boolean
            },
            //this autogenerates a time stamp
            {timestamps: true}
        )
    )
    return Tutorial
}