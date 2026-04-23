import { NextRequest, NextResponse } from 'next/server';

function validatePhone(phone: string) {
    return /^\+[1-9]\d{7,14}$/.test(phone);
}

export async function proxy(req: NextRequest) {
    const { pathname } = req.nextUrl;

    const raw = pathname.replace('/go/', '');
    const phone = decodeURIComponent(raw);

    if (!validatePhone(phone)) {
        return new NextResponse('Invalid phone number', { status: 400 });
    }

    const res = await fetch(
        `http://213.230.65.139:8080/go/${encodeURIComponent(phone)}`,
        {
            method: 'GET',
            redirect: 'manual',
        }
    );

    const location = res.headers.get('location');

    console.log("location", location);

    if (!location) {
        console.log("failed going to fallback");
        return NextResponse.redirect('https://app.yoldosh.uz');
    }

    console.log("success going to location");
    return NextResponse.redirect(location);
}

export const config = {
    matcher: ['/go/:path*'],
};