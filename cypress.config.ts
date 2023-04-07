import { defineConfig } from 'cypress';

export default defineConfig({
    e2e: {
        setupNodeEvents(on) {
            on('task', {
                log(message) {
                    console.log(message);
                    return null;
                },
                table(message) {
                    console.table(message);
                    return null;
                },
            });
        },
    },
    video: false,
    screenshotOnRunFailure: false,
});
