#  **Git筆記**

今天有一個叫做菜哥的朋友，會叫做菜哥是因為家裡賣菜，跟你認識的其他人同名的話純屬巧合。

菜哥：「就是啊，我最近有一個煩惱。因為我的笑話太多了，所以我目前都用文字檔記錄在電腦裡，可是變得越來越多之後很難紀錄，而且我的笑話是會演進的。會有版本一、版本二甚至到版本十，這樣我就要建立好多個不同的檔案，弄得我頭很痛，聽說你們工程師都會用一種程式叫做 Git 來做版本控制，可以教我一下嗎？」

『好吧，我試試看』

## **1.甚麼是Git**
 git是一個可以幫你控制版本的軟體，使用感覺上有點像玩遊戲的存檔概念。你隨時都可以幫你修改的檔案新增一個當前紀錄，如果以後有需要把之前的檔案拿來用時，隨時都可以讓他恢復。
 
## **2.Git的基本指令**

**git的部分**

* git init (初始化 會生成資料夾
* git status (查看git目前的狀態
* git add (把檔案加入控制列表
* git rm --cached (從版本控制移除
* git commit (寫註記 回傳
* git commit --amend (改commit名
* git reset --hard (直接回到上一個commit
* git reser --soft (當前commit不記錄 留下改變
* git log (查看commit歷史紀錄
* git diff (可以看版本內容的差別

* 檔案.gitignore (git add不讀取名單

======================

**branch的部分**

* git branch (創建一個分支
* git branch -v (查看分支
* git branch -d (刪除分支
* git branch -m (分支改名
* git checkout (跳到指定分支
* git merge (合併分支
    (git conflict (檔案發生衝突


## **3.菜哥的實際範列**
1.首先我們要先建立一個用來存放笑話的資料夾 
2.用cmd開啟到這個資料夾的位子
3.在cmd輸入git init (這是為了初始化這個資料夾 讓他變成可以被git控制
4.創一個寫笑話的txt檔，並在裡面寫上內容 (暫時把檔案稱作笑話.txt
5.輸入git add，並在單字後面加入笑話.txt (這邊是在選擇你要把那些檔案加入控制
6.選擇完後輸入git commit -m"註解"，這樣就會生成一個這個檔案紀錄了 
7.在cmd輸入branch "分支的名字" 
(這裡是在創造一個分支 我們要修改的檔案都會放在這裡 我們先把 她稱作another
8.再來用git checkout another切換到another分支
9.現在就可以修改笑話.txt的內容了
10.修改完後在cmd裡輸入"git add 笑話.txt"把修改完的檔案選擇起來
11.再輸入git commit -m"註解"把她儲存起來
12一直重複步驟9~步驟11直到檔案改好
13.用git checkout master跳到最初的分支
14.用git merge another把兩個分支的檔案合併成一個 這樣就完成了
15.如果有要用到之前某個版本時，要在cmd打git log查詢的要的版本資料 (黃色字的那串亂碼
16.在cmd輸入git checkout "黃色亂碼"就可以跳到之前的本版本了