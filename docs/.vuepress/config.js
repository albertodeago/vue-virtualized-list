module.exports = {
    title: "VirtualizedList documentation",
    plugins: [
        '@vuepress/last-updated',
        [
            '@panelbear/vuepress-plugin-panelbear',
            {
              site: 'DYfZ2tZjAbS', // Your Site ID
              debug: false, // Enable if you wish to send events from localhost / log to console
            },
        ],
    ],
}