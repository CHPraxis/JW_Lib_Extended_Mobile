import { StatusBar, StyleSheet } from "react-native";

/*
const htmlStyles = {
    #normals-display {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
      }
      #normals-display span {
        display: inline;
        background: #f0f8ff;
        border-radius: 3px;
        font-size: 10px;
        margin: 1px;
        padding: 2px;
        white-space: nowrap;
      }
      body {
        margin: auto auto;
        font-family: 'Noto Sans', Arial, 'Arial Unicode MS', sans-serif;
        font-size: 16px;
        line-height: 1.5;
        word-break: normal;
        overflow-y: scroll;
      }
      #body-div {
        box-shadow: 0 0 50px rgba(0, 0, 0, 0.2);
      }
      .card {
        margin: auto auto;
      }
      .navbar-nav {
        flex-wrap: wrap;
      }
      .nav-item {
        min-width: 100px;
      }
      a.nav-link img {
        max-height: 1.2em;
      }
      .navbar {
        background-color: #343d4a !important;
      }
      @media only print {
        .navbar {
          background: #000;
          color: #fff;
        }
      }
      .navbar .navbar-brand img {
        vertical-align: baseline;
      }
      .navbar .navbar-brand #nav-title {
        margin-left: 0.25em;
        display: inline-block;
      }
      .navbar .navbar-brand #nav-title #slogan {
        font-size: 50%;
        margin-top: -0.5em;
      }
      #search-form {
        background-color: #f2f1ef;
        padding: 0.25rem;
        height: 3rem;
      }
      #search-form #btnSideMenu {
        align-self: center;
        height: 38px;
        display: none;
      }
      #search-form #btnSideMenu img {
        height: 1.5em;
        align-self: center;
        margin-right: 1em;
        margin-left: 0.5em;
        transition: transform 0.2s ease-in-out;
      }
      #search-form button,
      #search-form input {
        border-color: #ced4da;
      }
      #search-form button:hover {
        background-color: #343d4a;
      }
      #search-form button:hover img {
        filter: invert(1) brightness(2);
      }
      #search-form button img {
        height: 1em;
        margin-top: 0.25em;
        margin-right: 0.1em;
        vertical-align: text-top;
        transition: filter 0.15s ease-in-out;
      }
      #bookSelector .section {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 5px;
        font-weight: bold;
      }
      @media only screen and (max-width: 600px) {
        #bookSelector .section {
          grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
          gap: 1px;
          padding: 5px;
          font-size: 90%;
          text-overflow: ellipsis;
          font-weight: normal;
        }
      }
      .book {
        background-color: #4d375a;
        padding: 10px;
        color: #fff;
        text-decoration: none;
        text-align: center;
      }
      .flex-break {
        flex-basis: 100%;
      }
      .div {
        scrollbar-color: #d4aa70 #e4e4e4;
        scrollbar-width: thin;
      }
      div::-webkit-scrollbar {
        width: 20px;
      }
      div::-webkit-scrollbar-track {
        background-color: #e4e4e4;
        border-radius: 100px;
      }
      div::-webkit-scrollbar-thumb {
        border-radius: 100px;
        border: 0px solid rgba(0, 0, 0, 0.18);
        border-left: 0;
        border-right: 0;
        background-color: #000000a4;
      }
      h1 {
        margin-top: 0;
        margin-bottom: 0.25em;
        font-size: 1.749690125em;
        font-weight: 700;
        line-height: 1.25;
      }
      ul {
        list-style-type: none;
      }
      a {
        color: #4a6da7;
        text-decoration: none;
      }
      ol,
      ul {
        padding-left: 0;
      }
      .result p {
        margin-bottom: 0;
      }
      .result a {
        text-decoration: none;
        color: #4477a1;
        font-size: 1.2em;
        font-weight: 300;
      }
      .pagination {
        display: flex;
        flex-wrap: wrap;
        gap: 5px;
      }
      .pagination a {
        width: 3em;
        height: 3em;
        line-height: 3;
        text-align: center;
        color: #000;
        background-color: #faf8fc;
        transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
      }
      .pagination a.active {
        font-weight: bold;
      }
      .pagination a:hover {
        background-color: #4d375a;
        color: #fff;
      }
      .pagination a span {
        display: inline-block;
        margin: auto auto;
      }
      .pagination .random {
        width: 10em;
        white-space: nowrap;
        background-color: orange;
      }
      #startExactSearch {
        vertical-align: baseline;
      }
      .directory .item:not(:first-child) {
        border-top: 1px solid #dbd8d3;
      }
      .directory .item a.active {
        font-weight: bold;
      }
      .directory .item:hover,
      .directory .item a.active {
        background-color: #faf8fc;
      }
      .directory .item:hover .thumbnail,
      .directory .item a.active .thumbnail {
        background-color: #6a7483;
      }
      .directory .item .thumbnail {
        width: 48px;
        background-color: #4c5767;
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: center;
        flex-shrink: 0;
        transition: background 200ms;
      }
      .directory .item .thumbnail img {
        max-height: 32px;
        max-width: 32px;
      }
      .directory .item .thumbnail span {
        width: 100%;
        max-height: 32px;
        max-width: 32px;
        height: 100%;
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        background-image: url('../images/icons/bk.svg');
      }
      .directory .item .thumbnail .icon-vod {
        background-image: url('../images/icons/closed-captioning.svg');
      }
      .directory .item .thumbnail .icon-bk,
      .directory .item .thumbnail .icon-bi {
        background-image: url('../images/icons/bible.svg');
      }
      .directory .item .thumbnail .icon-bk {
        background-image: url('../images/icons/book.svg');
      }
      .directory .item .thumbnail .icon-bklt,
      .directory .item .thumbnail .icon-kn,
      .directory .item .thumbnail .icon-brch {
        background-image: url('../images/icons/brch.svg');
      }
      .directory .item .thumbnail .icon-g {
        background-image: url('../images/icons/g.svg');
      }
      .directory .item .thumbnail .icon-km,
      .directory .item .thumbnail .icon-mwb,
      .directory .item .thumbnail .icon-news {
        background-image: url('../images/icons/km.svg');
      }
      .directory .item .thumbnail .icon-manual {
        background-image: url('../images/icons/manual.svg');
      }
      .directory .item .thumbnail .icon-trct {
        background-image: url('../images/icons/trct.svg');
      }
      .directory .item .thumbnail .icon-w {
        background-image: url('../images/icons/w.svg');
      }
      .directory .item .thumbnail .icon-web {
        background-image: url('../images/icons/web.svg');
      }
      .directory .item .thumbnail .icon-images {
        background-image: url('../images/polaroid.svg');
      }
      .directory .item.folder .thumbnail {
        background-color: #1f2937;
      }
      .directory .item.folder ~ .item {
        margin-left: 5px;
      }
      .directory .item .detail {
        align-self: center;
        margin-right: 1em;
        text-align: right;
      }
      .directory .item .arrow {
        align-self: center;
      }
      .directory .item .arrow .icon {
        background-image: url('../images/chevron-right-icon.svg');
        background-size: contain;
        background-repeat: no-repeat;
        width: 1em;
        height: 1em;
      }
      .directory .item .arrow .icon-rev {
        background-image: url('../images/chevron-left-icon.svg');
        background-size: contain;
        background-repeat: no-repeat;
        width: 1em;
        height: 1em;
      }
      .directory .item a {
        display: flex;
      }
      .directory .item .title {
        padding-top: 1em;
        padding-bottom: 1em;
        margin-left: 0.5em;
        margin-right: 0.5em;
        flex-grow: 1;
        flex-direction: column;
        display: flex;
      }
      .directory .item .title:has(.subtext) {
        padding-top: 0.5em;
        padding-bottom: 0.5em;
      }
      .directory .item .subtext {
        font-size: 90%;
      }
      .directory .item.chapter .title {
        padding-top: 0.1em;
        padding-bottom: 0.1em;
        max-height: 3.2em;
        overflow: hidden;
      }
      mark {
        color: #000;
        background-color: #ffe87c;
      }
      .txtDoc {
        white-space: pre-wrap;
      }
      .result .ref {
        font-size: 0.9em;
        color: #999;
        display: inline-block;
        margin-top: 0.3em;
      }
      body {
        max-width: 1600px;
      }
      #secondaryNavContent {
        position: fixed;
        top: 124px;
        width: 450px;
        height: calc(100vh - 124px);
        overflow-y: auto;
        background-color: #f2f1ef;
        transition: width 0.4s ease-in-out;
      }
      #secondaryNavContent h1 {
        font-size: 1.3em;
        color: #64605d;
        padding: 0.5em 0;
        border-bottom: 1px solid #d6dbe1;
      }
      #fixedHeader {
        position: fixed;
        top: 0;
        width: 100%;
        max-width: 1600px;
        z-index: 10;
        box-shadow: 0 2px 2px 0 #0000004d;
        transition: top 0.4s ease-in-out;
      }
      @media print {
        #fixedHeader {
          position: relative;
        }
      }
      #fixedHeader .navbar {
        height: 77px;
        color: #fff;
        padding-top: 0;
        padding-bottom: 0;
      }
      #fixedHeader .navbar .navbar-brand {
        font-size: 30px;
      }
      #currentFileBox {
        display: none !important;
      }
      @media only screen and (min-width: 1201px) {
        #regionBodyInner {
          margin-left: 450px;
          padding: 1em 80px 5em 80px;
        }
        #regionMain {
          padding-top: 124px;
          min-height: 100vh;
        }
        #secondaryNavContent {
          position: fixed;
          top: 124px;
          width: 450px;
          height: calc(100vh - 124px);
        }
      }
      @media print, only screen and (max-width: 1200px) {
        #fixedHeader .navbar {
          height: 3rem;
          color: #fff;
        }
        #fixedHeader .navbar .navbar-brand {
          font-size: 20px;
        }
        #regionBodyInner {
          margin-left: 350px;
          padding: 1em 50px 5em 50px;
        }
        #regionMain {
          padding-top: 6em;
          min-height: 100vh;
        }
      }
      @media print {
        #regionMain {
          padding-top: 0;
        }
      }
      @media print, only screen and (max-width: 1200px) {
        #secondaryNavContent {
          position: fixed;
          top: 6rem;
          width: 350px;
          height: calc(100vh - 6rem);
        }
      }
      @media only screen and (max-width: 900px) {
        #regionBodyInner {
          margin-left: 300px;
          padding: 1em 50px 5em 50px;
        }
        #secondaryNavContent {
          position: fixed;
          width: 300px;
        }
      }
      @media print, screen and (max-width: 800px) {
        #regionBodyInner {
          margin-left: 0;
          padding: 1em 50px 5em 50px;
        }
        #secondaryNavContent {
          z-index: 6;
          position: fixed;
          width: 0;
        }
        #secondaryNavContent #sidebarInner {
          width: 320px;
          width: calc(min(450px, 80vw) - 11px);
          float: right;
        }
      }
      @media screen and (max-width: 800px) {
        #docDisclaimer {
          margin-top: 100px;
        }
      }
      @media print, screen and (max-width: 800px) {
        #currentFileBox {
          display: block !important;
          width: 100%;
          z-index: 1;
          transition: top 0.4s ease-in-out, padding 0.4s ease-in-out;
        }
      }
      @media screen and (max-width: 800px) {
        #currentFileBox {
          position: fixed;
          top: 6em;
          height: 0;
        }
      }
      @media screen and (max-width: 800px) {
        body.nav-up #currentFileBox {
          position: fixed;
          top: 0;
        }
        body.nav-up #currentFileBox .item,
        body.nav-up #currentFileBox .thumbnail {
          min-height: 16px;
        }
        body.nav-up #currentFileBox img {
          max-height: 16px;
        }
        body.nav-up #currentFileBox .item .title {
          padding-top: 0.1em;
          padding-bottom: 0.1em;
        }
      }
      @media print, screen and (max-width: 800px) {
        #currentFileBox .item {
          background-color: #fff;
          margin-left: 0;
        }
        #currentFileBox .item .item,
        #currentFileBox .item .thumbnail,
        #currentFileBox .item img {
          transition: max-height 0.4s ease-in-out, min-height 0.4s ease-in-out;
        }
        #currentFileBox .item .title {
          transition: padding 0.4s ease-in-out;
          padding-top: 0.5em;
          padding-bottom: 0.5em;
        }
        #currentFileBox .item .arrow {
          display: none;
        }
      }
      @media print, screen and (max-width: 800px) {
        #currentFileBox .item:last-child {
          box-shadow: 0 2px 2px 0 #0000004d;
        }
      }
      @media print, screen and (max-width: 800px) {
        #searchBackdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          display: block;
          touch-action: none;
          z-index: 5;
          background-color: rgba(0, 0, 0, 0);
          transition: visibility 0.4s ease-in-out, background-color 0.4s ease-in-out;
          visibility: hidden;
        }
      }
      @media print, screen and (max-width: 800px) {
        #btnSideMenu {
          display: flex !important;
        }
      }
      @media print, screen and (max-width: 800px) {
        .showSideMenu #btnSideMenu img {
          transform: scaleX(-1);
        }
        .showSideMenu #searchBackdrop {
          visibility: visible;
          background-color: rgba(0, 0, 0, 0.5);
        }
        .showSideMenu #secondaryNavContent {
          width: 80vw !important;
          max-width: 450px;
          transition: width 0.4s ease-in-out;
        }
      }
      @media print, screen and (max-width: 800px) {
        body.nav-up:not(.showSideMenu) #fixedHeader {
          top: -6em;
        }
      }
      @media only screen and (max-width: 480px) {
        #regionBodyInner {
          padding: 1em 16px 5em 16px;
        }
      }
      ul.searchNav {
        font-size: 0.9em;
      }
      .searchNav li,
      .searchNav ul,
      ul.searchNav {
        list-style-type: none;
        margin: 0;
        padding: 0;
      }
      .searchNav > li {
        padding: 0.5em 0;
        cursor: pointer;
      }
      .searchNav > li:hover {
        transition: border, background 200ms;
        background-color: #fff;
      }
      #searchFilterContainer {
        min-height: 300px;
        overflow-y: auto;
        padding-left: 4%;
      }
      .searchNav > li:not(:first-child) {
        border-top: 1px solid #dbd8d3;
        border-top-color: #dbd8d3;
      }
      .ts {
        color: #0486d3;
        font-style: italic;
        cursor: pointer;
      }
      #tooltip {
        position: absolute;
        max-width: 30em;
        top: 40vh;
        left: 40vw;
        background-color: #fff;
        box-shadow: 0px 8px 30px 5px #000000cc;
        max-height: 50vh;
        overflow-y: auto;
        border-radius: 10px;
        z-index: 1;
      }
      @media only screen and (max-width: 600px) {
        #tooltip {
          left: 2rem !important;
          right: 2rem !important;
        }
      }
      #tooltip #tooltip-body .scripture-header {
        background: #f2f1ef;
        padding: 0.75em 1em;
        color: #343d4a;
        position: sticky;
        top: 0;
        box-shadow: 0 2px 2px 0 #0000006e;
      }
      #tooltip #tooltip-body p {
        padding: 0.25em 1em 0.25em 1em;
        font-size: 16px;
      }
      #tooltip #tooltip-body b {
        color: #343d4a;
        font-weight: 700;
        padding-right: 0.25em;
        font-family: 'Noto Sans', Arial, 'Arial Unicode MS', sans-serif;
      }
      #tooltip #tooltip-body .credit {
        font-size: 10px;
        margin-bottom: 0;
      }
      #tooltip #tooltip-body .serif {
        font-family: 'Merriweather', 'Times New Roman', serif;
      }
      #tooltip #tooltip-body .verse span:not(:first-child) {
        padding-left: 2em;
      }
      #tooltip #tooltip-body .verse span.indent {
        padding-left: 3em;
        display: block;
      }
      a.lookupScripture {
        font-weight: 600;
      }
      #docDisclaimer {
        background-color: #6a7483;
        color: #fff;
        padding: 1em;
        margin-bottom: 1em;
      }
      #docDisclaimer a {
        color: #fff;
        text-decoration: underline;
      }
      .finder-activator {
        position: fixed;
        bottom: 5px;
        right: 15px;
        z-index: 1;
        width: 50px;
        height: 50px;
        border: 0;
        border-radius: 100%;
        background-color: #4c5767;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .finder-activator:hover {
        background-color: #6a7483;
      }
      .finder-activator:focus {
        background-color: #343d4a;
      }
      .finder-activator img {
        filter: invert(1) brightness(2);
        max-height: 50%;
      }
      .finder {
        position: fixed;
        bottom: -50px;
        max-width: 800px;
        margin: auto;
        right: 0;
        left: 0;
        z-index: 999;
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        height: 50px;
        background: #fff;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 14px;
        border-bottom: 1px solid #e5e5e5;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        padding: 5px;
        transition: bottom 0.15s ease-out;
      }
      .finder.active {
        bottom: 0;
      }
      .finder-input {
        font-size: 16px;
        flex-grow: 1;
        width: 0;
        height: 40px;
        border: none;
        padding: 8px;
        outline: none !important;
      }
      .finder-input.not-found {
        color: #e7353f;
      }
      .btn-finder {
        width: 40px;
        height: 40px;
        text-align: center;
        padding: 0;
      }
      .finder-input,
      .btn-finder:not(:last-child) {
        margin-right: 5px;
      }
      .finder-count {
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        flex-direction: column;
        justify-content: center;
        color: #888;
        border-right: 1px solid #e5e5e5;
        margin-right: 5px;
        padding-right: 20px;
        white-space: nowrap;
      }
      .btn-finder,
      .finder-count {
        flex-shrink: 0;
        flex-grow: 0;
      }
      mark.active {
        background: #ffd71b;
        box-shadow: 1px 1px #000;
        position: relative;
      }
      .far,
      .fas,
      .fa {
        min-width: 1em;
        min-height: 1em;
        display: block;
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        font-style: normal;
      }
      .fa-times {
        background-image: url('../images/close.svg');
      }
      .fa-angle-down {
        background-image: url('../images/chevron-down-icon.svg');
      }
      .fa-angle-up {
        background-image: url('../images/chevron-up-icon.svg');
      }
      .document img {
        max-width: 100%;
      }
      @media screen and (min-width: 601px) {
        .imageFlow {
          display: flex;
          flex-wrap: wrap;
        }
        .imageFlow::after {
          content: '';
          flex-grow: 999999999;
        }
        .imageFlow div {
          margin: 2px;
          background-color: #fff;
          position: relative;
        }
        .imageFlow i {
          display: block;
        }
        .imageFlow img {
          position: absolute;
          top: 0;
          width: 100%;
          vertical-align: bottom;
        }
      }
      @media screen and (min-width: 601px) and (min-width: 1000px) {
        .imageFlow img:hover {
          z-index: 2;
          min-width: 400px;
          box-shadow: 0 0 20px 10px #000;
          top: -40px;
        }
      }
      @media screen and (max-width: 600px) {
        .imageFlow {
          display: block;
          -webkit-column-count: 3;
          -moz-column-count: 3;
          column-count: 2;
          -webkit-column-gap: 3px;
          -moz-column-gap: 3px;
          column-gap: 3px;
        }
        .imageFlow div {
          width: unset !important;
          flex-grow: unset !important;
          display: inline-block;
          width: 100%;
        }
        .imageFlow div img {
          display: block;
          width: 100%;
        }
        .imageFlow div i {
          padding-bottom: unset !important;
        }
      }
      #regionMain:has(.imageFlow) {
        background-color: #343d4a;
      }
      #regionMain:has(.imageFlow) #regionBodyInner {
        margin-left: 0;
      }
      @media screen and (max-width: 1600px) {
        #regionMain:has(.imageFlow) #regionBodyInner {
          padding-left: 0.2em;
          padding-right: 0.2em;
        }
      }
      #regionMain:has(.imageFlow) #secondaryNavContent {
        display: none;
      }
      .input-group .btn {
        z-index: 1;
      }
      #tidio-chat-iframe {
        bottom: 60px !important;
      } /*# sourceMappingURL=style.css.map */
      
//}

//export default htmlStyles;