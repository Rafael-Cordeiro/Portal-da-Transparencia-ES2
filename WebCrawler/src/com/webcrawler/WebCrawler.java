package com.webcrawler;


import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.select.Elements;
import org.jsoup.nodes.Element;

public class WebCrawler {

	public static void main(String[] args) {

		
			try {
				Document document = Jsoup.connect("https://www.imdb.com/list/ls062458414/").userAgent("Mozilla/17.0").get();
				Elements temp=document.select("div.lister-item-content");
				
				int i=0;
				for (Element movieList:temp) 
				{
					i++;
					System.out.println(i+ " "+ movieList.getElementsByTag("a").first().text());
				}
				
			} catch (Exception e) {
			
				e.printStackTrace();
			}

	}

}
