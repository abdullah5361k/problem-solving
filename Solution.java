import java.util.*;

public class Solution {


    public static class Hashmap<K, V> {


        private class Node {
            K key;
            V value;

            Node(K key, V value) {
                this.key = key;
                this.value = value;
            }

        }

        private int n; // n
        private LinkedList<Node> buckets[]; // N = bucket.length

        public Hashmap() {
            this.n = 0;
            this.buckets = new LinkedList[4];

            for(int i=0; i<4; i++) {
                this.buckets[i] = new LinkedList<>();
            }

        }

        private hashFunction(K key) {
            int hashValue = key.hashCode(); // -122345
            return Math.abs(hashValue) % this.buckets.length;
        }

        private searchInLL(K key, int bi) {
            LinkedList<Node> ll = this.buckets[bi];

            for(let i=0; i<ll.size(); i++) {
                if(ll.get(i))
            }

        }

        put(K key, V value) {

            int bi = hashFunction();

        }

    }



    public static void main(String[] args) {

        LinkedList<Integer>[] buckets = new LinkedList[4];

        System.out.println(buckets);

    }
}


