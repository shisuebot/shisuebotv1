cd $HOME
rm -rf wb2
pkg install git
git clone https://github.com/shisuebot/shisuebotv1.git
cd shisuebotv1
pkg install zip
pkg install unzip
mv nine.zip $HOME
cd $HOME
unzip nine.zip
rm -rf wb2
mv nine wb2
rm -rf nine.zip
cd wb2
bash install.sh
cd /data/data/com.termux/files/usr/etc
echo cd $HOME/wb2>>bash.bashrc
echo while : >>bash.bashrc
echo do >>bash.bashrc
echo node index.js >>bash.bashrc 
echo rem -rf *.webp >>bash.bashrc 
echo rem -rf *.mp4 >>bash.bashrc 
echo rem -rf *.mp3 >>bash.bashrc 
echo done >>bash.bashrc
echo echo  O PROGRMA FOI FINALIZADO! >>bash.bashrc

