import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
    const ua = request.headers.get('user-agent') || '';

    const isAndroid = /Android/i.test(ua);
    const isIOS = /iPhone|iPad|iPod/i.test(ua);

    // ВСТАВЬ СВОИ ССЫЛКИ
    const ANDROID_URL = 'https://redirect.appmetrica.yandex.com/serve/462176418311233799';
    const IOS_URL = 'https://redirect.appmetrica.yandex.com/serve/462176418311233799';
    const DESKTOP_URL = 'https://redirect.appmetrica.yandex.com/serve/462176418311233799';

    if (isAndroid) {
        return NextResponse.redirect(ANDROID_URL);
    }

    if (isIOS) {
        return NextResponse.redirect(IOS_URL);
    }

    // ПК / Mac → сюда
    return NextResponse.redirect(DESKTOP_URL);
}

export const config = {
    matcher: '/',
};