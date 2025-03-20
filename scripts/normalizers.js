function normalizePhoneNumber(phone) {
    let normalized = phone.replace(/\D/g, '');

    if (normalized.startsWith('8')) {
        normalized = '+7' + normalized.slice(1);
    }

    return normalized;
}