//
//  ShowBlogController.swift
//  ios-vue
//
//  Created by 启业云03 on 2024/8/19.
//

import UIKit
import WebViewJavascriptBridge

/// 定义一个bridge，用于原生与H5侧互调
private var bridge: WebViewJavascriptBridge!

class ShowBlogController: BaseWebViewController {

//    https://juejin.cn/post/6971826484377813029

    /// 懒加载webView
       private lazy var webView: WKWebView = {
           let config = WKWebViewConfiguration()
           let preferences = WKPreferences()
           preferences.javaScriptCanOpenWindowsAutomatically = true
           config.preferences = preferences
           
           let webView = WKWebView(frame: view.frame, configuration: config)
           webView.allowsBackForwardNavigationGestures = true
//           webView.navigationDelegate = self
           return webView
       }()

       override func viewDidLoad() {
           super.viewDidLoad()
//           bridgeSetting()
//           setupUI()
       }
}
