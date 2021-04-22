var englishDates = ["14 April,2021","15 April,2021","16 April,2021","17 April,2021","18 April,2021","19 April,2021","20 April,2021","21 April,2021","22 April,2021","23 April,2021","24 April,2021","25 April,2021","26 April,2021","27 April,2021","28 April,2021","29 April,2021","30 April,2021","1 May,2020","2 May,2020","3 May,2020","4 May,2020","5 May,2020","6 May,2020","7 May,2020","8 May,2020","9 May,2020","10 May,2020","11 May,2020","12 May,2020","13 May,2020","14 May,2020",]
var seharTime = ["4:51 AM","4:50 AM","4:49 AM","4:48 AM","4:47 AM","4:46 AM","4:45 AM","4:44 AM","4:43 AM","4:42 AM","4:41 AM","4:40 AM","4:39 AM","4:38 AM","4:37 AM","4:36 AM","4:35 AM","4:34 AM","4:33 AM","4:32 AM","4:31 AM","4:30 AM","4:29 AM","4:28 AM","4:27 AM","4:26 AM","4:25 AM","4:24 AM","4:23 AM","4:22 AM",]
var iftarTime = ["6:55 PM","6:55 PM","6:56 PM","6:56 PM","6:57 PM","6:57 PM","6:58 PM","6:58 PM","6:59 PM","6:59 PM","7:00 PM","7:00 PM","7:01","7:01","7:02","7:02","7:03","7:03","7:04","7:04","7:05","7:05","7:06","7:06","7:07","7:07","7:08","7:08","7:09","7:09",]
var ramadanDate = +prompt("Which Ramadan Date's Sehar And Iftar Time Do You Want to know")
document.write('<h1>' + "Ramadan Calender By Malik Umair Khalid" + '</h1>')
document.write('<div>' + '<h2>' + "The English Date is : " + englishDates[--ramadanDate] + "</h2>")
document.write('<h2>' + "The Sehar Time is : " + seharTime[ramadanDate] + '</h2>' )
document.write('<h2>' + "The Iftar Time is : " + iftarTime[ramadanDate] + '</h2>' + '</div>')

