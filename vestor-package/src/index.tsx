import React, { useState, useEffect } from 'react';

interface response {
  status: string;
  message: string;
}

interface VestorProps {
  url: string;
}

interface count {
  page_name: string;
  visit_count: number;
}

export default function Vestor({url}: VestorProps) {
  const [loaded, setLoaded] = useState<boolean>(false);
  const [data, setData] = useState<count>();
  // 获取当前页面的 host 后面的路径
  let page_name = window.location.pathname;
  if (page_name === '/') {
    page_name = 'home';
  } else {
    page_name = page_name.replace('/', '');
  }
  // 获取用户的 ip 地址
  const [ip, setIp] = useState<string>();

  useEffect(() => {
    fetch('http://ip-api.com/json', {
      method: 'GET',
      mode: 'cors',
    }).then((response) => {
      return response.json();
    }).then((data) => {
      setIp(data.query);
    });
  }, [page_name]);

  useEffect(() => {
    if (!loaded){
      fetch(url + '/visit?ip=' + ip + '&page_name=' + page_name, {
        method: 'GET',
        mode: 'cors',
      }).then((response) => {
        return response.json();
      }).then((data) => {
        console.log('🚀Use Vestor to track your website visit count. ' + "https://github.com/inannan423/Vestor" );
        setLoaded(true)
      });
    }
  }, [url]);

  useEffect(() => {
    fetch(url + '/data?page_name=' + page_name, {
      method: 'GET',
      mode: 'cors',
    }).then((response) => {
      return response.json();
    }).then((data) => {
      setData(data);
    });
  }, [url, page_name]);

  return data;
}
