package com.webcrawler;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;

public class WebCrawler {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		final String url = "http://www.transparencia.pmmc.com.br/funcionalismopublico/salarios";
		
			try {
				final Document document = Jsoup.connect(url).get();
				
				System.out.println(document.outerHtml());
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}

	}

}
