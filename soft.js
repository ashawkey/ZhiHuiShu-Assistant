
(function () {
	const MAX_DELAY = 10 // max delay in second
	const CHECK_INTERVAL = 1 // loop interval in second

	const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time))

	const start = async function () {
		console.log('智慧树助手已启动')

		while (true) {
			console.log('正在检查')
			
			if ($('.popbtn_cancel')[0]) {
				const delay1 = Math.floor(Math.random() * MAX_DELAY * 1000) + 100
				const delay2 = Math.floor(Math.random() * MAX_DELAY * 1000) + 100
				console.log('发现弹题，将在' + (delay1 + delay2) / 1000 + ' 秒后点击关闭')
				await sleep(delay1)
				const iframe = document.getElementById('tmDialog_iframe').contentWindow
				iframe.document.querySelector('.answerOption label').click()
				await sleep(delay2)
				$('.popbtn_cancel').click()
			}

			if ($('.current_play').find('.progressbar').width() == $('.current_play').find('.progressbar_box').width()) {
				const delay = Math.floor(Math.random() * MAX_DELAY * 1000) + 100
				console.log('本节完成，' + delay / 5000 + ' 秒后将切到下一课')
				await sleep(delay / 5)
				$('.current_play').nextAll('.video')[0].click()
        
        			if (!/1\.5/.test($('.speedBox').attr('style'))) {
				  console.log('提升到1.5倍速')
				  $('.speedTab15').click()
			  	}

		  		else if (!/liuchang/.test($('.definiBox').attr('style'))) {
				  console.log('更改画质')
				  $('.line1bq').click()
			  	}

			  	else if ($('.volumeBox').find('.passVolume').width() != 0) {
				  console.log('静音')
				  $('.volumeIcon').click()
			  	}
			
			  	else if ($('.playButton').length > 0) {
				  const delay = Math.floor(Math.random() * MAX_DELAY * 1000) + 100
				  console.log('发现暂停, 将在' + delay / 10000 + ' 秒后播放')
				  await sleep(delay / 10)
				  $('.playButton').click()
			  	}
			}
			await sleep(CHECK_INTERVAL * 1000)
		}
	}
	start()
}())
