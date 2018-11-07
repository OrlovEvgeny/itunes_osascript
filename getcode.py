#!/usr/bin/env python3
# -*- coding: UTF-8 -*-

import sys, imaplib, email, logging


mailSrv = imaplib.IMAP4_SSL('imap.mail.ru')

try:
    mailSrv.login(sys.argv[1], sys.argv[2])
except Exception:
    print("fail")
    exit(0)


mailSrv.select('INBOX', True)

bodyText = ""
typ, data = mailSrv.search(None, 'UNSEEN')
typ, appleMail = mailSrv.search(None, 'ALL')

for num in data[0].split() :
	typ, data = mailSrv.fetch(num, '(RFC822)')

	msg = email.message_from_string(data[0][1])
	if msg['From'].lower().find('apple.com') == -1 : continue

	subj, encoding = email.Header.decode_header(msg['Subject'])[0]
	if subj.lower().find('apple id') == -1 : continue

	if msg.is_multipart() :
		for payload in msg.get_payload() :
			if payload.get_content_type() == 'text/plain' : bodyText = payload.get_payload(decode = True)
	else :
		bodyText = msg.get_payload(decode = True)

mailSrv.select()
for num in appleMail[0].split() :
	mailSrv.store(num, '+FLAGS', '\\Deleted')

for str in bodyText.splitlines() :
	if str.isdigit() : print str

mailSrv.expunge()
mailSrv.close()
mailSrv.logout()
