import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/sorry/index?continue=https://www.google.com/search%3Fq%3Dswiggy%26oq%3Dswiggy%26gs_lcrp%3DEgZjaHJvbWUyBggAEEUYOdIBCDY5ODBqMGo0qAIAsAIB%26sourceid%3Dchrome%26ie%3DUTF-8%26sei%3DfrFfafKeFeWgnesPuoW-iA0&q=EhAkBQIBwCCSuPDO-Of5q90oGP7i_soGIjBqsx0oiaBcnNdXizPQweA0uilM3JPicWTF5I9GE-ZOPop3Vjw68j97_PZY2WWZJGYyAVJaAUM');
});