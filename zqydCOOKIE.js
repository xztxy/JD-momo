module.exports = {
    "id": "zqyd",
    "name": "钟情阅读",
    "keys": ["zqydurl","zqydbody","zqydurl2","zqydbody2","zqydurl3","zqydbody3","zqydurl4","zqydbody4","zqydurl5","zqydbody5","zqydurl6","zqydbody6","zqydurl7","zqydbody7","zqydurl8","zqydbody8","zqydurl9","zqydbody9","zqydurl10","zqydbody10"],
    "author": "@tom",
    "settings": [{
      "id": "zqydSuffix",
      "name": "当前账号",
      "val": "1",
      "type": "number",
      "desc": "当前抓取ck记录的账号序号，如：1、2、3、4"
    }, {
      "id": "zqydCount",
      "name": "账号个数",
      "val": "4",
      "type": "number",
      "desc": "指定任务最多跑几个账号，根据抓取的账号数据个数来设值"
    }, {
      "id": "zqydXH",
      "name": "循环获取ck",
      "val": "0",
      "type": "number",
      "desc": "0关闭，1打开，默认关闭"
    }, {
      "id": "zqydTXTX",
      "name": "txtx",
      "val": "0",
      "type": "number",
      "desc": "0关闭，1打开，默认关闭"
    }, {
      "id": "zqydSC",
      "name": "sc",
      "val": "0",
      "type": "number",
      "desc": "0关闭，1打开，默认关闭"
    }, {
      "id": "zqydnotifyttt",
      "name": "推送控制",
      "val": "1",
      "type": "number",
      "desc": "0关闭，1推送,默认12点以及23点推送"
    }, {
      "id": "zqydnotifyInterval",
      "name": "通知控制",
      "val": "2",
      "type": "number",
      "desc": "0关闭，1为 所有通知，2为 12，23 点通知，3为 6，12，18，23 点通知"
    }, {
      "id": "zqydMinutes",
      "name": "推送-通知 分钟控制",
      "val": "10",
      "type": "number",
      "desc": "推送以及通知控制在什么分钟段，可设置0-59,默认0到10"
    }],
    "repo": "https://gitee.com/tom210120/tom/raw/master/ZQ/zq.js",
    "icons": ["https://gitee.com/tom210120/tom/raw/master/Tom/Tom.jpg", "https://gitee.com/tom210120/tom/raw/master/Tom/Tom.jpg"],
    "script": "https://gitee.com/tom210120/tom/raw/master/ZQ/zq.js",
    "icon": "https://gitee.com/tom210120/tom/raw/master/Tom/Tom.jpg",
    "favIcon": "mdi-star-outline",
    "favIconColor": "grey",
    "datas": [{
      "key": "zqydurl",
      "val": "https://kandian.wkandian.com/v3/article/lists.json?catid=1453&op=0&behot_time=1639199737007&oid=0&video_catid=0&access=WIFI&app_name=zqkd_app&app_version=3.5.5&carrier=%E4%B8%AD%E5%9B%BD%E7%94%B5%E4%BF%A1&channel=c1005&device_brand=Xiaomi&device_id=57493187&device_model=M2102K1AC&device_platform=android&device_type=android&dpi=560&inner_version=202108181034&language=zh-CN&memory=10&mi=0&mobile_type=1&net_type=1&network_type=WIFI&openudid=ebdd9af43bd5efe5&os_api=25&os_version=NZH54D&phone_sim=1&request_time=1639199795&resolution=1440x3032&rom_version=NZH54D&s_ad=PCWwRj3eGxCw%3DiGVCZPT-Nnuaq5RDrLjaMZGfKdhNDWIf&sm_device_id=202112072320423ca7bcf4bc2df834f18d89204120c3c30127f3f0d4151810&storage=225.29&uid=46840175&version_code=63&zqkey=MDAwMDAwMDAwMJCMpN-w09Wtg5-Bb36eh6CPqHualq2jmrCarWKxzZtphHx6ma-4qmqXr6NthJl7mI-shMmXeqDau4StacS3o7GFooKasKnMqoKJn2mEY2Ft&zqkey_id=ef2a8394a402d5648b5c4c715cfcf3d5&sign=3bb34f01b9d442b56d1ca94cdd572d8d"
    },{
      "key": "zqydbody",
      "val": "p=pUJybc31G2V0%3DvoWtRZZLNIRPNhwckmkQdyhJSIDwF2L02F_FSFAMBtrWj6nS_VuzRW0ZNmQtMlAks8EqhHjfkhL1xly-68mKU-5IhWZQV5qoLArwdaA6R_gJAfqYXmyDs0TC9ur075H6aaTsm-UhQq77DvxxA0LsTXYFCAJqG7kHdUO7mPj-UgsAp99JsxEiJwoF2LGJGuZpUfKzMHMcvf5Ewlid-b0r4L5GFUJ3WR7B5tk8KaVzS5zqFyMyylRTumPPp9GGcF7yhrgGsrgW6xkKLlKDgtw9o_jYI4z3hT7_yGquvmQlTE1eIv5XNcAItHq8yXi6PbVYNQOy6yiNZmodLB2oCf6sbmLStRLwVk0AKE-953DNLkr0yxbgemL5InAFUZ7hwKOXeSl6VFWxduT79WqxaZhd_5e8yd4qLkX3yPmbm-yDSkYXJPQszt4ZfuJjTr26wE4XmwfnK9dscGOOqjb86QM5QoWkcPKzZMmsZE36Ul8s8d5WV4LDuzjQBH40eXe6ENglgtPenHSZd2c46axUlE-YNHLAhfRHs-gz0kJkkAca4vieEgpLyW80PszevLc5t8UKDQyY-xLgHCPUCY-1kXv-DWKh_LDK1XPEVRvF-lGe26CzLDhhBGLl9EOiorw0G_Fuyq0ALsqyAj_syTGPKhe5Ps9jbFOoRk5_wwgtGUibPzDWXE2Ef3z_sa6_7OUg0ii0yBXddBtSKpppo1GqmS8AVOaSZ04hNEAg3nRLqKKNwIykdrnt7IfDPlnuQ02XyOxlJLjfgbbkoYoNtYXHc_13X-C9SYep3h81pa1gZ7cYVoI6QMA0muXuNc4XpzyOB_xea-Fkw-iy7S3BQ7wMytc38Go9zzNCVdzGIWNS1p-zVvPTMpxuuHDZL9oviZ6_vZC8zmBup_FNOoaQw1s5AnGlYrD8vlSnY4ij-qhoYGmGFGsGsqKrnfDeNw_kA2GuSoknSYMzyJFls_AaXEkzLAFZf62bX2Qod5Q99y6UTwrZ3RR-dtH57p9Ql0x0qTT2lDjwWdqwrr03Iz0TCl3n79EVfp_poExDeZeMNZ8h6DyeVu_W9Vy1sCiIRUuIlfdgsHZSQOIy_HjKZ_K_V2XZj661uZt19KAzzG0PvHmTV3xVUiZvF3AaciPxtCcYOiJd_eWtqX"
    },{
      "key": "zqydurl2",
      "val": "https://kandian.wkandian.com/v3/article/lists.json?catid=0&op=0&behot_time=0&oid=0&video_catid=1453&access=WIFI&app_name=zqkd_app&app_version=3.5.5&carrier=%E4%B8%AD%E5%9B%BD%E7%94%B5%E4%BF%A1&channel=c1005&device_brand=Xiaomi&device_id=57493226&device_model=M2102K1AC&device_platform=android&device_type=android&dpi=560&inner_version=202108181034&language=zh-CN&memory=10&mi=0&mobile_type=1&net_type=1&network_type=WIFI&openudid=2c1dd603916d257a&os_api=25&os_version=NZH54D&phone_sim=1&request_time=1639199981&resolution=1440x3032&rom_version=NZH54D&s_ad=rXU6PBNNsHKc%3DSZwGs7bVu_Orjty3EYXYRHk7sg7fh61Ea&sm_device_id=2021120723243380385ee0a426fe544142f316cf0df46f01365bf1f95cde0a&storage=225.29&uid=58697492&version_code=63&zqkey=MDAwMDAwMDAwMJCMpN-w09Wtg5-Bb36eh6CPqHualIejl7B1vWex3YVuhKKp4LDPyGl9onqkj3ZqYJa8Y898najWsJupZLDdm22GjHaarqmqapqGcXY&zqkey_id=725793d446cbcc092fd8865cbcc296a1&sign=464563bc429812474a1ec3faa06e5139"
    },{
      "key": "zqydbody2",
      "val": "p=4UJybc31G2V0%3DvoWtRZZLNIRPNhwckmkQdyhJSIDwF2L02F_FSFAMBtrWj6nS_VuzRW0ZNmQtMlAks8EqhHjfkhKwcvyvECawSGCROmHURea-6WuwhNrA1AWnI5a_2OsbhmNtwW14BB2nqsqgPUjsgVd2UU7YWn4zm9vJgOO6eqGnpqMzl47EgT4TCrbAPwYZlXjFW1Bl7z7OLHbJHvo-ex7W5rc3hTkNld04aMnpJDgaVora_qLmJ2iejT4gdDdARUxYtT_v90Tlian8VULF76KApQaqlT-DLmhyLM-c-wT2I6ajY_YcoqQNp_lp2v-kP3lr3ZZtIbWXzxDxriHgoSEpm9OSkTUQoz4ZIHu2EaVyV4kmgOcOlHCbzpsKWLk_LkoA0R5HF54ZiXfdLAhm03qkw8UWb9Q02Qrw-bllXOGntq5pu_DOiJqv2lsufkPogE_OQO3JQUc7yiLys7W0hbvHdDMUHDGPjYEtVVhDtbiqZRDuvHqSfHujuE_QEA0C55V3A7fGEmlCg6LU3NpUfTrhzCakTb5bosTlWyEXb-Bk_UK1rhD4Jx4CRa8jhBWl-tXvNCrXe1QlgTLllLrfTSFzbZ35Gfb2ZLBgebZzDrIBMRCz_AW-uDauPQ2g_IDiyD8YojATTWj-xgulZyGOq3W3GlBhf8iFQkI4_PzMchv2JDv1AH2tHMqWLy_htnB2W94Ikt2ZGnTlppKf-kWbXHKJAlut-LlFG94MQdtPCJ8WcUCUVMm9jwzxfWgwXfJp1Uq13NCEZYzn83KI3eJK1akrJ0XOa8sThjdtjtTtJvT3iAblDvdqId7sipQypRBv1AmXwr3CinWoLE9Qs9UmB2exflnK6jXm-nXRXVigNHlUdCQHk44YzFAatyLGbU0pPiRv1z4wZi21v2TzMaBW9s1aPoYLl-yL-e_gxQ_spYGjoOm3S2jeV38kwLP3WgjKLJAgDpn8xPAjPDwRTpmLi9VvvWlNxQf30n13i_XQWrCeVLAt-BEOIbVpR03ymeMCKeX3-gBCkx_9cG0dXnHGY62ixKyssVvZPaf2fbSoNMHd4NI14RA-_Q7nIOfVO2L78V6ig4Jg-OjA0Z0a_updQd-d-a79MHucKtEhug0kgq_4mYdrLaL57SHTig5LznyoVg%3D%3Djp"
    },{
      "key": "zqydurl3",
      "val": "https://kandian.wkandian.com/v3/article/lists.json?catid=0&op=0&behot_time=0&oid=0&video_catid=1453&access=WIFI&app_name=zqkd_app&app_version=3.5.5&carrier=%E4%B8%AD%E5%9B%BD%E7%94%B5%E4%BF%A1&channel=c1005&device_brand=Xiaomi&device_id=57493288&device_model=M2102K1AC&device_platform=android&device_type=android&dpi=560&inner_version=202108181034&language=zh-CN&memory=10&mi=0&mobile_type=1&net_type=1&network_type=WIFI&openudid=5541dfbc34b81450&os_api=25&os_version=NZH54D&phone_sim=1&request_time=1639200200&resolution=1440x3032&rom_version=NZH54D&s_ad=3cTMBiVxDAfc%3D-gRBA-qAg8BpLg9UpAzRobpgQcSgajzwF&sm_device_id=20211207233029cedbade87e70025753f1ceae9ca7669401d34d0c2fed39f2&storage=225.29&uid=60259315&version_code=63&zqkey=MDAwMDAwMDAwMJCMpN-w09Wtg5-Bb36eh6CPqHualIejmK51rWOyt4GxhYyp4LDPyGl9onqkj3ZqYJa8Y898najWsJupZLDdm22GjHrer9-2apqGcXY&zqkey_id=521e43d74194227e88c2b9b183101976&sign=3fab1e7ae77b92c66bd7dd3ad2bd17fb"
    },{
      "key": "zqydbody3",
      "val": "p=hXU6PBNNsHKc%3DbTzFskkR0W7gqAuRMDKEfACEJP78H--B625lGh1W-_HpKyEsVpMfQMZRS1D5iPV9ngBZwYy3BTPOv5_bg2rBDUKLwL2J2GOrmxdAaSW2g-a3a0cSkvB-V7nX_Ifeb2xZ9ltjR-KrTEMc4mIzXLrF9mdFg5crCml2UqdrgmuxQdigvrumA2jmrgsMViWNcranQmn8P1XyN6pjE5_ssa5STDaCiok3j4LXVxN8n9MTadiMbGia_1_xPYffNAz9QjqCrAZrFLBWvC-rQmcyRCg-jyVy--cDtNDNJbI0hWm4dMJgc3XyTDuM6rlB72D6-I2O9U3pk-h7lss5JHphvfwvuLnY8s1SJegXdAGr5yw6J0Gl4gHAPyDSE8WTlt8oqO5fkENOw4UNfXMIX0yto-FGgSgelI6NjPh1wWtTH7LWHfYpI9doMoIUvEnM_YsD-Y7yrU1VGKaUffg8e1fuw6ceZVoJJQJdsVs3G0pBI6d-ZN2FFGjD3Xl7YdoDgPhDBIUIo8RdV40W596phH0gpjh88Z1M1gEEsfwMJMCNglUPqMP-f1N2-sbzDuoJId5aCc-sAaPZ7XpnkAkjVV_jBBUF7eEHR5Y8fGbgnZIMoIoACbC5S2U6thHC2hHLGV1xzVGpaAEZZG9qab459FDECHw40uSubHTctn1XIIIoK_BA93L5TtLqfNtvscpiGM7GDendWXs_swrJCpCiaEjw9Bit5X9FC77XbQTUch-LVwi61WEPp6mMcIEXvtR8Lp8k3Eqq8jhXbFIAIi7mxg549kukBSXx3Q8-OdbQHfzfkuuQDvt_od-ZOy_QKv5d3VGscTcYqu4SmbVgpVUOyIvWtvRvE1bZmQw41yR6pYemvD-gzDytlIPKlj_nthm6X_QmJ5WjjQmt8Oz4F62g8FSwHrAwPK1_2zaHx0r_IxyaPLBzh8mRoCkQMjVa7QUsfrYO7EtuJJH5Qyg8zkmMMePXZhw3OZ_K7E7Kru1QuxSpcvnc2jkeQ3UggYtdSEJ0Gqvc82mNymZ3AX_rGnocenSwCa1n6VKBf53gqAqTYdURooHtrToepLD98En4LAoUoaLaewtcnQgG-evu2wvH9qZhsm-MlNhGFe4f2xWTaexY6Hh_yh5IIPgfd9xn7b3Yg--jC2BeYpdjZIawTuCLyixWEI8TOQWyOOSohKMm-c8T2Uwf5iNlXlmx2EK0oOON3p3wvtSrf"
    },{
      "key": "zqydurl4",
      "val": "https://kandian.wkandian.com/v3/article/lists.json?catid=0&op=0&behot_time=0&oid=0&video_catid=1453&access=WIFI&app_name=zqkd_app&app_version=3.5.5&carrier=%E4%B8%AD%E5%9B%BD%E7%94%B5%E4%BF%A1&channel=c1005&device_brand=Xiaomi&device_id=57493308&device_model=M2102K1AC&device_platform=android&device_type=android&dpi=280&inner_version=202108181034&language=zh-CN&memory=10&mi=0&mobile_type=1&net_type=1&network_type=WIFI&openudid=c6bc2077c2b2141b&os_api=25&os_version=NZH54D&phone_sim=1&request_time=1639200345&resolution=1200x1836&rom_version=NZH54D&s_ad=nCWwRj3eGxCw%3DsdpUXHqaePKYzExdDlzEVkceQPr14HIk&sm_device_id=20211207233353297a3f89dd04c5a9a2a528d7384d78b30155cd573482129b&storage=225.29&uid=60415748&version_code=63&zqkey=MDAwMDAwMDAwMJCMpN-w09Wtg5-Bb36eh6CPqHualIejmK51taqxt5dphnyp4LDPyGl9onqkj3ZqYJa8Y898najWsJupZLDdm22GjHrgr6m6apqGcXY&zqkey_id=4bf917427283f2019bd2c88d0ce928ac&sign=002f3779736ea10dfdaeaccd28a49b3a"
    },{
      "key": "zqydbody4",
      "val": "p=O2JgR8oZr6IU%3DBty5sXh9aR9qYRLTZOTU178MyLkRYeBiZOP65oO7v9ez6kUmeZV-Lj_N4XetRCdhLXou04zxSfpYfZ7cf5XeTI5skb8V1FE2EwLEJsfAweCr7ObRKb7VFPMoSCktaOGhFA25uiVKq0g6Ai2QqeTKXF_ZdYgDVb2yBYVaSyfZpGE9TymNQncxIU7Ln6EZD0dQA1bYE3tObVAiWTvPjfoEgfn5bNIOuUP2pSJpgRBO0fCU1qOyKYbJfYAD5zNfJ12IpUdqZzD0rlTG-D6g-uYiiq-bIKtc6eWOIF_OV21mbXwDrtHOqdY3KWzttaC4UmARjUdCCtq-pZv5e8EmWbfWcfzz62OAhU4SWQIN9EFgj2pYrk5XMDOupoFhSw7105-CtgM9Lkt8k0nv-QAFJovkfLSDbmZw6vjoJeqq6UE4xQYTkSv7l863C6AxYRuIk_WqpjqjPGy6-9plVQx9pvNmEEZKuwCmAoKc4RkTFLsX6ET1dVj2f5JWcAef7CGVgy9a0p3Jsyk_cIiXnVhrZjOjrFnnoznpbuFCt1XMHytaQhgVOc3B615eKb6esEIEfzcH5DQfUKIb_7aWTT9X1WKJwb451mfsBuEGoN3pc-I5qRE1kfnzWUUiiU7eCiW0qVcI-ngy85bhauOQ8MgF4qo5kO2wLkSAAYWJOAF1jbPqCWPtA_3EydeMvoHsMGRmuvPh9yng_JQt7lmKbIbsP2rJA1DRhq8aPoPVt5wzOLjGPkEtffBEzA3joVMqhdELWrQk37dJ_0ZKVv8YjAGEZGfrkkx7IyC7DXeHyB4aigl0uQJXJhLRW6PEeyc5kpk8zvWmwMtdmhP1iPkR09vaGP8jS0TYVqdLkoz_tJogEEtWmyqOwDze5uCHC-TonLfrmqo5MuWAMDOHZp6kEb3hZOMVM_geo0kMoBjfzh3DQC7wkTZwW-V8ZpKdrA2gQX2zYgz3DVjpxPhVUoofAyB_EXVc8GIa8JesuslzhBx_a_XLZvq6jPrvWknF7SfPIV4FO0SDgyLDmcUNVkxJZjXwuGpL15lHLqimjBuPGPJTcVLaax1yk5AHaUdbEuvIGkiYMD1AXuQfZTP2HqWPSy18rY-luE1lTc0RSUBZveDhmEMKJqOa_fZskgMptXXbKjMIO_6bUvgtkoDYdlpIu7eux_EUcwOb3BlFbzZJ0Xiu8k4Owzj7whkkrZ7sCspSONjuIjR_"
    }],
    "sessions": [],
    "isLoaded": true
  }
